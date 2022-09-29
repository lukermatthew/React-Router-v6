import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import ReducerPage from "./pages/ReducerPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="/product/:productId"
        element={<ProductPage header="Product" />}
      />
      <Route path="/reducer" element={<ReducerPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
