import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order'>Order Food</Link></li>

    </>
    return (

        <div className="navbar fixed bg-opacity-60 z-10 bg-stone-600 text-cyan-300 max-w-6xl">
            <div className="navbar-start">
                <div className="dropdown">
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