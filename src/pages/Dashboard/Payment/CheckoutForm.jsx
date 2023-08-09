import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './Checkout.css';
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe && !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod)
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                status: 'service pending',
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-outline btn-primary btn-sm mt-5" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-500">Transaction complete with transactionId : ${transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;