const Navbar = () => {
    const navItems = <>
        <li><a>Item 1</a></li>
        <li>
            <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
    </>
    return (

        <div className="navbar fixed bg-opacity-40 z-10 bg-black text-white max-w-6xl">
            <div className="navbar-start">
                <div className="dropdown">

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost bg-base-content normal-case text-xl">Foodee Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost bg-base-content ">Get Started</a>
            </div>
        </div>

    );
};

export default Navbar;