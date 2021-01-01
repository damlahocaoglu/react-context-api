import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail(props) {
  const { productID } = useParams();

  const product = products.filter(item => item._id === Number(productID));
  return (
    <div className="mt-5">
      <h2>{product[0].title}</h2>
      <p>{product[0].detail}</p>
      <img src={product[0].imgUrl} width="200" height="200" />
      <p className="mt-3">{product[0].price}</p>
    </div>
  );
}

export default ProductDetail;
