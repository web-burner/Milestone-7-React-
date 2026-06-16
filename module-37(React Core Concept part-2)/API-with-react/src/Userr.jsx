// import React from 'react';

// import { use } from "react";

const Userr = ({ user }) => {
  const { id, name } = user;
  return (
    <>
      <div>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
      </div>
    </>
  );
};

export default Userr;
