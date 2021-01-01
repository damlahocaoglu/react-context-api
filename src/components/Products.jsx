import React from "react";
import { products } from "../data/products";
import { Link, Switch, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { ThemeContext } from "../context/ThemeContext";

function Products(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;

  const productsMap = products.map(item => (
    <li>
      <Link to={`/products/${item._id}`}>{item.title}</Link>
    </li>
  ));

  return (
    <div className={[bgColor, textColor, ""].join(" ")}>
      <div className="mx-3">
        <h1>Ürünler</h1>
        <hr />
        {productsMap}
        <Switch>
          <Route path="/products/:productID">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Products;
