// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/cart";

function App() {
  const productName = ["Iphone 13", "Onplus 9", "Redmi 13"];
  const price = ["$350", "$250", "$100"];

  return (
    <div className="App">
      <Header />
      {productName.map((nm) => (
        <Cart name={nm} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
