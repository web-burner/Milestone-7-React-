
const Bottlee = ({bottle , addToCart}) => {
    const {img,name,price,stock} = bottle
    return (
        <div className="border border-violet-800 rounded-xl p-2">
            <img src={img} width={"200px"} className="rounded-md" alt="" />
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <p>{stock} remaining</p>
            <button onClick={()=> addToCart(bottle)} className="btn">Buy Now</button>
        </div>
    );
};

export default Bottlee;