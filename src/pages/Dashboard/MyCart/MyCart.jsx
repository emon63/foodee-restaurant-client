import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    return (
        <div>
            <Helmet>
                <title>Foodee | My Cart</title>
            </Helmet>
            <div>
                <h3 className="text-center">My Cart</h3>
                <div className="uppercase flex gap-6">
                    <h2 className="text-3xl">Total Items : {cart.length}</h2>
                    <h2 className="text-3xl">Total Prices : ${total}</h2>
                    <button className="btn btn-warning btn-sm">Pay</button>

                </div>
            </div>


        </div>
    );
};

export default MyCart;