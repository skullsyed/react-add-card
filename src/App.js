// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/cart";

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
        {/* <Cart /> */}
        {/* <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart /> */}
        {products.map((nm) => (
          <Cart name={nm.productName} price={nm.productPrice} />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
