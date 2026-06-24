// import React from 'react';

const StoredBottles = ({ storedBottles, handleRemove }) => {
  return (
    <div className="flex gap-3 mb-5">
      {storedBottles.map((bottle) => (
        <div key={bottle.id} className="flex">
          <img className="w-[50px]" src={bottle.img}></img>
          <p onClick={() => handleRemove(bottle.id)}>X</p>
        </div>
      ))}
    </div>
  );
};

export default StoredBottles;
