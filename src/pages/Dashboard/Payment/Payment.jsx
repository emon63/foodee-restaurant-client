import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-full">
            <Helmet>
                <title>Foodee | Payment</title>
            </Helmet>
            <SectionTitle heading={'Payment'} subHeading={'Please Process'}></SectionTitle>
            <h3 className="text-3xl text-center">money payment</h3>
            <div className="w-full justify-center px-20 text-center py-20">
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;