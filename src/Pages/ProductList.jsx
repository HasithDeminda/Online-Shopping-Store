import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import "./ProductList.scss";

const ProductList = () => {
  return (
    <div className="container-productList">
      <Navbar />
      <Announcement />

      <h1 className="title">Dresses</h1>
      <div className="filter-container">
        <div className="filter">
          <span>Filter Products:</span>

          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Blue</option>
          </select>

          <select>
            <option disabled selected>
              Size
            </option>
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
            <option disabled selected>
              Newest
            </option>
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
