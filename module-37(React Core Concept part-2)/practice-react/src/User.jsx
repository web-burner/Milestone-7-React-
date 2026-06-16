// import { use } from "react";

import { useState } from "react";

const User = ({ user }) => {
  const [count, setCount] = useState(0);
  const { name, phone, email } = user;
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  if (email) {
    return (
      <div className="user">
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <button onClick={handleCount}>{count}</button>
      </div>
    );
  }
};

export default User;
