// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/cart";
import { useState, useEffect } from "react";

function App() {
  const products = [
    { productName: "Iphone 13", productPrice: "$350" },
    { productName: "Onplus 9", productPrice: "$350" },
    { productName: "Redmi 13", productPrice: "$350" },
    { productName: "Iphone 13", productPrice: "$350" },
    { productName: "Onplus 9", productPrice: "$350" },
    { productName: "Redmi 13", productPrice: "$350" },
    { productName: "Iphone 13", productPrice: "$350" },
    { productName: "Onplus 9", productPrice: "$350" },
    { productName: "Redmi 13", productPrice: "$350" },
  ];

  return (
    <div className="App">
      <Header />
      <div className="cart-container">
        {products.map((nm) => (
          <Cart name={nm.productName} price={nm.productPrice} />
        ))}
      </div>
      <Render />
      {/* <Timer /> */}
      {/* <Footer /> */}
    </div>
  );
}

function Render() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide text" : "Show text"}
      </button>
      {showText && <p>This text is hidden by default.</p>}
    </div>
  );
}

export default App;
