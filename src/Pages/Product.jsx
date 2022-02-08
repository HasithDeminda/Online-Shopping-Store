import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "./Product.scss";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Product = () => {
  return (
    <div className="pages-container-product">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <div className="image-container">
          <img
            src="https://static-01.daraz.lk/p/3203635fc129a53d92282b6d4812184e.jpg"
            alt=""
          />
        </div>

        <div className="Info-container">
          <h1 className="title">Product Name</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            illo dolor amet deleniti voluptatum aliquid veritatis debitis,
            tempora, neque quia repudiandae aperiam suscipit eligendi nulla
            perspiciatis? Quas, neque molestiae.
          </p>
          <span className="price">20 $</span>
          <div className="filter-container">
            <div className="filter">
              <span className="filterTitle">Color</span>
              <div
                className="filterColor"
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className="filterColor"
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className="filterColor"
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>

            <div className="filter">
              <span className="filterTitle">Size</span>
              <select className="filterSize">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="addContainer">
            <div className="amountContainer">
              <RemoveCircleIcon />
              <span className="amount">1</span>
              <AddCircleIcon />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
