import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('http://localhost:5000/users')
        return res.data
    })
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json()
    // })
    const handleDelete = (user) => {
        console.log(user)
    }
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Foodee | All User</title>
            </Helmet>
            <h3 className="text-3xl text-center font-semibold my-3 ">Total Users : {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'admin' :
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-white bg-blue-500"><FaUserShield></FaUserShield></button>
                                        }
                                    </td>
                                    <td> <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;