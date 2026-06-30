import { useState } from "react";

const Player = ({ player, handleChosenPlayer }) => {
  const { name, image, country, role, rating, batting, bowling, price } =
    player;
    const [isSelected , setSelected] = useState(false)
  return (
    <div className=" border border-gray-200 p-4 rounded-xl flex flex-col justify-between gap-3 shadow-xl">
      <figure>
        <img className=" h-[150px] w-full rounded-md" src={image} alt="" />
      </figure>
      <div>
        <h2 className=" text-lg font-semibold">{name}</h2>
      </div>
      <div className="flex justify-between border-b border-gray-300 font-semibold">
        <p>{country}</p>
        <p>{role}</p>
      </div>
      <div>
        Rating: <span className="font-semibold">{rating}</span>
      </div>
      <div className=" flex justify-between">
        <p>{batting}</p>
        <p>{bowling}</p>
      </div>
      <div className="flex justify-between">
        <p>
          Price: $<span>{price}</span>
        </p>
        <button disabled= {isSelected}
          onClick={() => {
            handleChosenPlayer(player);
            setSelected(true)
          }}
          className="btn border-none bg-[#E7FE29] outline-1 outline-offset-4 outline-red-700 text-black shadow-none"
        >
          {isSelected ? 'Selected': 'Choose Player'}
        </button>
      </div>
    </div>
  );
};

export default Player;



