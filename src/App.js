import "./App.css";
import Header from "../src/Components/Header";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home cart={cart} setCart={setCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} setCart={setCart} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
