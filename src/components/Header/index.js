import React from "react";
// import { useState } from "react";
// import './bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = ()=>{
// const [cartItem, setCartIteam] = useState();

return(
  <div>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom  header-potion">
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
    </ul>

    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-outline-primary me-2 login-button">Login</button>
      <button type="button" className="btn btn-primary">Sign-up</button>
      <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
    </div>
  </header>
  </div>

)


}

export default Header;