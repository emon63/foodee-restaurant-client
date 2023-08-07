import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure()
    // const total = cart.reduce((sum, item) => item.price + sum, 0) || 0;
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/menu/${item._id}`)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                        .catch(error => {
                            console.error('Error deleting item:', error);
                        });

                }
            })
    }
    return (

        <div className="w-full">
            <Helmet>
                <title>Foodee | Manage Items</title>
            </Helmet>
            <SectionTitle heading={'Manage All Item'} subHeading={'Hurry Up'}></SectionTitle>
            <div>

                <div className="uppercase flex justify-evenly h-[50px] items-center font-semibold">
                    <h2 className="text-3xl">Total Items : {menu.length}</h2>
                </div>
                <div className="overflow-x-auto ps-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="">{item.category}</td>
                                    <td className="">${item.price}</td>
                                    <td className="">Update</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};
export default ManageItems;