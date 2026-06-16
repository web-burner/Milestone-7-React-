// import React from 'react';

import { use } from "react";
import Userr from "./Userr";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);

  return (
    <div className="users">
      <h2>Users: {users.length}</h2>
      <div>
        {users.map((user)=> <Userr key={user.id} user={user}></Userr>)}
      </div>
    </div>
  );
};

export default Users;
