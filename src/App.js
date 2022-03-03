import "./App.css";
import Header from "../src/Components/Header";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { useState } from "react";
import {CartContext} from './Context'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
