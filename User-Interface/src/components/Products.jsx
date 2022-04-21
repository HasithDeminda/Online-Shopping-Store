import React, { useEffect } from "react";
import "./Products.scss";
import { popularProducts } from "../data";
import SingleProduct from "./SingleProduct";
import { useState } from "react";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // In home page there are no categories, but in product list there is.
        // So, if there's a category first query will execute and if there's no category, 2nd query will execute
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?categories=${cat}`
            : "http://localhost:5000/api/products/"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "ASC") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
  }, [sort]);

  //Filtering
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  // console.log(filteredProducts);
  // console.log(cat, filters, sort);
  return (
    <div className="container-products">
      {cat
        ? filteredProducts.map((item) => (
            <SingleProduct item={item} key={item.id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <SingleProduct item={item} key={item.id} />)}
    </div>
  );
};

export default Products;
