const getToLS = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    return cart;
  }
  return [];
};
const setToLS = (id) => {
  const cartString = JSON.stringify(id);
  localStorage.setItem("cart", cartString);
};
const addToLSCart = (id) => {
  const cart = getToLS();
  const newCart = [...cart, id];
  setToLS(newCart);
};

const removeFromLS = (id) => {
  const carts = getToLS();
  const remainingCart = carts.filter((storedId) => storedId !== id);
  setToLS(remainingCart);
};

export { addToLSCart, getToLS, removeFromLS };
