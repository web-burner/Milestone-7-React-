// import React from 'react';

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price, stock } = bottle;
  return (
    <div className="bg-white text-black p-5 rounded-lg">
      <img src={img} width={"250px"} className="rounded-lg" alt="" />
      <h2>Name: {name}</h2>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <button
        onClick={() => handleAddToCart(bottle)}
        className="border border-black p-2 rounded-lg bg-violet-700 text-white font-bold"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Bottle;
