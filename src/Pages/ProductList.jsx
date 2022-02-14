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

  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
  };

  return (
    <div className="container-productList">
      <Navbar />
      <Announcement />

      <h1 className="title">Dresses</h1>
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

          <select name="color" onChange={handleFilters}>
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
          <select className="filter-select">
            <option disabled>Newest</option>
            <option>Price (ASC)</option>
            <option>Price (DESC)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
