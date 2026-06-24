//  Introduction To Local Storage: Storing Data In The Browser

const getToLS = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    return cart;
  }
  return [];
};

const addToLS = (id)=>{
    const cart = getToLS();
    const newCart = [...cart,id]
    setToLS(newCart)
}

const setToLS = (cart)=>{
    const jsonString = JSON.stringify(cart)
    localStorage.setItem('cart',jsonString)
}


export {getToLS , addToLS}