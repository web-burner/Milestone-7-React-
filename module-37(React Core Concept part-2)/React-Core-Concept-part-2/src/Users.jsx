import { use } from "react";

const Users = ({fetchUsers}) => {
    const users = use(fetchUsers);
    console.log(users)
    return (
        <div className="students">
            <p>User: {users.length}</p>
        </div>
    );
};

export default Users;