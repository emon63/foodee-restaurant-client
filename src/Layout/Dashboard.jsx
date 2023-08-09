import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart()
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
            <div className="drawer-content flex flex-col items-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-yellow-600">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to='/'><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers>All Users</NavLink></li>

                        </> :
                            <>
                                <li><NavLink to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/'><FaCalendarAlt></FaCalendarAlt>Reservations(not implemented)</NavLink></li>
                                <li><NavLink to='/'><FaWallet></FaWallet>Payment History(not implemented)</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart<span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;