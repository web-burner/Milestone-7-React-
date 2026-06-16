// import React from 'react';
import { use } from "react";
import User from "./User";
const Users = ({ userPromise }) => {
  const users = use(userPromise);
//   console.log(users);
  return (
    <div>
      {users.map((user, ind) => (
        <User key={ind} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
