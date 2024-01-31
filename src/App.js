import "./App.css";

import { useEffect } from "react";
import { fetchApiData } from "./redux/apiAction";
import Header from "./assets/header";
import Home from "./assets/home";
import { Route, Routes } from "react-router";
import Checkout from "./assets/checkout";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
