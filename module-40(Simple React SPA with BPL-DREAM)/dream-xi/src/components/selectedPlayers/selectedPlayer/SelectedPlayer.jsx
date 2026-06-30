// import React from 'react';

const SelectedPlayer = ({ player, handlePlayersCart }) => {
  const {id, image, name, role , price } = player;
  return (
    <div className="flex justify-between items-center p-2 border rounded-xl border-gray-300">
      <div className=" flex gap-4 items-center">
        <figure>
          <img className=" w-14 h-14 rounded-xl" src={image} alt="" />
        </figure>
        <div>
          <p className=" text-xl font-semibold">{name}</p>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <div>
        <button
          onClick={()=> handlePlayersCart(id,price)}
          className=" btn bg-transparent text-red-700 mr-1  shadow-none border border-red-700 "
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
