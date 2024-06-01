import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";

import "./App.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />

          <Route path="/product" category={<Product />}>
            {/* ROUTES FOR INDIVIUDAL Product */}
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" category={<Cart />} />
          <Route path="/login" category={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;