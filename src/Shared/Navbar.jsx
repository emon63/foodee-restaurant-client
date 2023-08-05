import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error)
            })
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order'>Order Food</Link></li>
        <li><Link to='secret'>Secret</Link></li>
        <li><Link to='/'>
            <button className="btn gap-2">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>

        {
            user ? <>
                <li>
                    <button onClick={handleLogOut} className="btn mt-1 h-[20] btn-ghost">Log Out</button>
                </li>
                <li className="ps-5 h-[20] mt-2">{user?.displayName}</li>
                <li className="">
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                </li>
            </> :
                <li><Link to='/login'>Login</Link></li>
        }


    </>
    return (

        <div className="navbar fixed bg-opacity-60 z-10 bg-stone-600 text-cyan-300 max-w-6xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost  md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn text-cyan-300 btn-outline  btn-ghost normal-case text-xl">Foodee Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-cyan-300 btn-outline  btn-ghost normal-case text-xl">Get Started</a>
            </div>
        </div>

    );
};

export default Navbar;