import { useState } from "react";
// import "./cart.css";

const Cart = ({ name, price }) => {
  // const [disable, setDisable] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    setAddedToCart(true);
  };

  // const cart = {
  //   display: disable ? "block" : "none",
  // };
  return (
    <div className="cart-base price-container">
      <div className="col mb-3 ">
        <div className="card h-100 ">
          <div className="card-body p-5">
            <div className="text-center">
              <h5 className="fw-bolder">{name}</h5>
              {price}
            </div>
          </div>
          <div
            // style={cart}
            className="card-footer p-4 pt-0 border-top-0 bg-transparent"
          >
            <div className="text-center">
              <button
                // onClick={() => setDisable(!disable)}
                onClick={handleClick}
                disabled={addedToCart}
                className="btn btn-outline-dark mt-auto"
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
