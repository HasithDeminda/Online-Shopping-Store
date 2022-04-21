import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import "./ProductList.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();

  const cat = location.pathname.split("/")[2]; //Split the pathname
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="container-productList">
      <Navbar />
      <Announcement />

      <h1 className="title">{cat}</h1>
      <div className="filter-container">
        <div className="filter">
          <span>Filter Products:</span>

          <select name="color" onChange={handleFilters}>
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Blue</option>
          </select>

          <select name="size" onChange={handleFilters}>
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span>Sort Products:</span>
          <select
            className="filter-select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Newest">Newest</option>
            <option value="ASC">Price (ASC)</option>
            <option value="DESC">Price (DESC)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
