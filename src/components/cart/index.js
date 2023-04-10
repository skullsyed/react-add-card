import "./cart.css";

const Cart = ({ name, price }) => {
  return (
    <div className="cart-base">
      <div class="col mb-5">
        <div class="card h-100 cart-container">
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">Fancy Product{name}</h5>
              $40.00 - $80.00{price}
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <a class="btn btn-outline-dark mt-auto" href="#">
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
