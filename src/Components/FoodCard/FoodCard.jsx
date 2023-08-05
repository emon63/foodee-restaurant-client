import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, price, image, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, recipe, price, image, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedID) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on cart successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Login to order food !',
                showCancelButton: true,
                confirmButtonText: 'Login Now',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-slate-800 text-white right-0 mt-4 me-4 px-3 rounded-md">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>

                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn bg-slate-100 border-orange-300 text-orange-300 btn-outline border-0 border-b-4 mt-3">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;