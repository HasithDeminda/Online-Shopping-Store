import React from "react";
import "./Products.scss";
import { popularProducts } from "../data";
import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <div className="container-products">
      {popularProducts.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
