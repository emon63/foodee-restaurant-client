import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h3 className="text-3xl">Welcome back, {user.displayName}</h3>
        </div>
    );
};

export default UserHome;