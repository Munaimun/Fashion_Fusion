import { createContext } from "react";
import all_products from "../component/Assets/Assets/all_product";

export const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  // Storing the datas to get access using context
  const contextValue = { all_products };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
