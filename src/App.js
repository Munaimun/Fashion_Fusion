import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./component/Footer/Footer";
import men_banner from "./component/Assets/Assets/banner_mens.png";
import women_banner from "./component/Assets/Assets/banner_women.png";
import kids_banner from "./component/Assets/Assets/banner_kids.png";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />

          {/* the categories are props value */}
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />

          <Route path="/product" category={<Product />}>
            {/* ROUTES FOR INDIVIUDAL Product */}
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" category={<Cart />} />
          <Route path="/login" category={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
