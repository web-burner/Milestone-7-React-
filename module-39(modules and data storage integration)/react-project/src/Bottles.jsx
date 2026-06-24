import { use, useState } from "react";
import Bottlee from "./Bottlee";
import { addToLS, getToLS } from "./localStorage";
import { useEffect } from "react";

const Bottles = ({ bottlesPromise }) => {
  const [addedProduct, setAddedProduct] = useState([]);

  const bottles = use(bottlesPromise);
  useEffect(() => {
    const storedCart = getToLS();
    const carts = [];
    for (let id of storedCart) {
      const bottleFound = bottles.find((bottle) => bottle.id === id);
      if (bottleFound) {
        carts.push(bottleFound);
      }
      console.log(bottleFound);
    }
    setAddedProduct(carts);
  }, [bottles]);

  const addToCart = (bottle) => {
    const newProduct = [...addedProduct, bottle];
    setAddedProduct(newProduct);
    addToLS(bottle.id);
  };
  return (
    <div>
      <h2>Total {bottles.length} Bottles</h2>
      <h2>Total Bottles Added To Cart: {addedProduct.length}</h2>
      <div className="grid grid-cols-3 gap-4">
        {bottles.map((bottle) => (
          <Bottlee
            bottle={bottle}
            key={bottle.id}
            addToCart={addToCart}
          ></Bottlee>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
