import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";

const RoutesProvider = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={"/cart"} element={<Cart />} />
    </Routes>
  );
};

export default RoutesProvider;
