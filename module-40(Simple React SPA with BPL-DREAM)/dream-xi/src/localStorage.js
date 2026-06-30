
const getCartToLS = () => {
  const playerCart = JSON.parse(localStorage.getItem("players"));
  if (playerCart) {
    return playerCart;
  }
  return [];
};

const getBalanceLS = ()=>{
    const balance = JSON.parse(localStorage.getItem('balance'))
    if(balance){
        return balance
    }
    return 12000000;
}

const addToLS = (id, balance) => {
  const playerCart = getCartToLS();
  const updatedCart = [...playerCart, id];
  setToLS(updatedCart, balance);
};

const setToLS = (playerCart, balance) => {
  
  const cart = JSON.stringify(playerCart);
  localStorage.setItem("players", cart);
  localStorage.setItem("balance", JSON.stringify(balance));
};

const removeFromLS = (id,balance) => {
  const cart = getCartToLS();
  const updateCart = cart.filter((playerId) => playerId !== id);
  setToLS(updateCart,balance);
};

export { addToLS, getCartToLS, removeFromLS , getBalanceLS };