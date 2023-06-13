import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import ContactPage from "./components/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ProductCard category={null} />} // Display all products
          />
          <Route
            path="/shoes"
            element={<ProductCard category="Shoes" />} // Display shoes category products
          />
          <Route
            path="/mobiles"
            element={<ProductCard category="Mobiles" />} // Display mobiles category products
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
