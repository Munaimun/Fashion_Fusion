import React from "react";

import Home from "../component/Home/Home";
import Popular from "../component/Popular/Popular";
import Offers from "../component/Offers/Offers";
import NewCollection from "../component/NewCollection/NewCollection";
import NewsLetter from "../component/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      <Home />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
