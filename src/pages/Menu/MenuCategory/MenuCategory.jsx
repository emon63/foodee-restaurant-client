import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem";

const MenuCategory = ({ items, img, title }) => {
    return (

        <div className="my-16">
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-9 mb-5 px-10 my-5'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-3">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;