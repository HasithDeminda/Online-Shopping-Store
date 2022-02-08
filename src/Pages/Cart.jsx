import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Cart.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Cart = () => {
  return (
    <div className="container-cart">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <h1 className="title">YOUR CART</h1>
        <div className="top">
          <button className="topButton-left">CONTINUE SHOPPING</button>
          <div className="top-texts">
            <span>Shopping Cart(2)</span>
            <span>Your wishlist(0)</span>
          </div>
          <button className="topButton-right">CHECKOUT NOW</button>
        </div>

        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="product-details">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNP_YAp3jvQxk4ZPEC88RyZnI0Ex7y9L579haDruS7ECTOfsS6wtNCDqjRFIC_gnsd1gQ&usqp=CAU"
                  alt=""
                />

                <div className="details">
                  <span className="product-name">
                    <b>Product :</b> LEATHER SPORTS SHOES
                  </span>
                  <span className="product-ID">
                    <b>ID :</b> 9388134560
                  </span>
                  <span className="product-color"></span>
                  <span className="product-size">
                    <b>Size :</b> 37.5
                  </span>
                </div>
              </div>

              <div className="price-details">
                <div className="product-amount-container">
                  <RemoveCircleIcon />
                  <span className="product-amount">2</span>
                  <AddCircleIcon />
                </div>
                <span className="product-price">$ 25</span>
              </div>
            </div>
            <hr />
            <div className="product">
              <div className="product-details">
                <img
                  src="https://5.imimg.com/data5/BQ/DQ/QM/SELLER-91887504/blue-men-lotto-sport-shoe-500x500.jpg"
                  alt=""
                />

                <div className="details">
                  <span className="product-name">
                    <b>Product :</b> LEATHER SPORTS SHOES
                  </span>
                  <span className="product-ID">
                    <b>ID :</b> 9388134560
                  </span>
                  <span className="product-color"></span>
                  <span className="product-size">
                    <b>Size :</b> 37.5
                  </span>
                </div>
              </div>

              <div className="price-details">
                <div className="product-amount-container">
                  <RemoveCircleIcon />
                  <span className="product-amount">2</span>
                  <AddCircleIcon />
                </div>
                <span className="product-price">$ 25</span>
              </div>
            </div>

            <hr />
            <div className="product">
              <div className="product-details">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKEm8j5sQ9tXR0pMZ4Bd-2d5BPuplLcE0jw&usqp=CAU"
                  alt=""
                />

                <div className="details">
                  <span className="product-name">
                    <b>Product :</b> LEATHER SPORTS SHOES
                  </span>
                  <span className="product-ID">
                    <b>ID :</b> 9388134560
                  </span>
                  <span className="product-color"></span>
                  <span className="product-size">
                    <b>Size :</b> 37.5
                  </span>
                </div>
              </div>

              <div className="price-details">
                <div className="product-amount-container">
                  <RemoveCircleIcon />
                  <span className="product-amount">2</span>
                  <AddCircleIcon />
                </div>
                <span className="product-price">$ 25</span>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span className="summary-item-text">Sub Total</span>
              <span className="summary-item-price">$ 75</span>
            </div>

            <div className="summary-item">
              <span className="summary-item-text">Estimated Shipping</span>
              <span className="summary-item-price">$ 6.50</span>
            </div>

            <div className="summary-item">
              <span className="summary-item-text">Shipping Discount</span>
              <span className="summary-item-price">$ -6.50</span>
            </div>

            <div
              className="summary-item"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              <span className="summary-item-text">Total</span>
              <span className="summary-item-price">$ 75</span>
            </div>

            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
