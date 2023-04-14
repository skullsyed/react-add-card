import "./cart.css";

const Cart = ({ name, price }) => {
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
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                View options
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
