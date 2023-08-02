
const FoodCard = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-slate-800 text-white right-0 mt-4 me-4 px-3 rounded-md">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>

                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-slate-100 border-orange-300 text-orange-300 btn-outline border-0 border-b-4 mt-3">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;