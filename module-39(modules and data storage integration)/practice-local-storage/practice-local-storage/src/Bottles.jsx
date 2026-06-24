import { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addToLSCart, getToLS, removeFromLS } from "./localStorage";
import StoredBottles from "./StoredBottles";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [storedBottles, setStoredBottles] = useState([]);

  useEffect(() => {
    const storedCart = getToLS();
    const cart = [];
    for (let id of storedCart) {
      const bottleFound = bottles.find((bottle) => bottle.id === id);
      if (bottleFound) {
        cart.push(bottleFound);
      }
    }
    setStoredBottles(cart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newBottle = [...storedBottles, bottle];
    setStoredBottles(newBottle);
    addToLSCart(bottle.id);
  };

  const handleRemove = (id) => {
    const removedCart = storedBottles.filter((bottles) => bottles.id !== id);
    setStoredBottles(removedCart);
    removeFromLS(id);
  };

  return (
    <div>
      <h2>Total Bottles :{bottles.length}</h2>
      <h2>Bottles Added To Cart: {storedBottles.length}</h2>
      <div>
        <StoredBottles
          storedBottles={storedBottles}
          handleRemove={handleRemove}
        ></StoredBottles>
      </div>
      <div className=" grid grid-cols-3 gap-5 w-11/12 mx-auto">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            handleAddToCart={handleAddToCart}
            key={bottle.id}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
