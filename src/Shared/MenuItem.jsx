
const MenuItem = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div className='flex space-x-2 h-[80px]'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
            <div className=''>
                <h3 className='text-2xl'>{name}--------</h3>
                <p>{recipe}</p>
            </div>

            <p className='text-yellow-600 text-xl'>${price}</p>

        </div>
    );
};

export default MenuItem;