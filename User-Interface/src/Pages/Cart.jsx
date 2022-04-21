import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Cart.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { userRequest } from "../requestMethods";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        console.log(res.data);
        history.push("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, history]);

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
            {cart.products.map((product) => (
              <div className="product">
                <div className="product-details">
                  <img src={product.img} alt="" />

                  <div className="details">
                    <span className="product-name">
                      <b>Product :</b> {product.title}
                    </span>
                    <span className="product-ID">
                      <b>ID :</b> {product._id}
                    </span>
                    <span
                      className="product-color"
                      color={product.color}
                    ></span>
                    <span className="product-size">
                      <b>Size :</b> {product.size}
                    </span>
                  </div>
                </div>

                <div className="price-details">
                  <div className="product-amount-container">
                    <RemoveCircleIcon />
                    <span className="product-amount">{product.quantity}</span>
                    <AddCircleIcon />
                  </div>
                  <span className="product-price">
                    $ {product.price * product.quantity}
                  </span>
                </div>
              </div>
            ))}
            <hr />
          </div>
          <div className="summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span className="summary-item-text">Sub Total</span>
              <span className="summary-item-price">$ {cart.total}</span>
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
              <span className="summary-item-price">$ {cart.total}</span>
            </div>

            <StripeCheckout
              name="ZigZag Shopping"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Pb53Hmc2ru1ZCtFSGjWp8L1vdWqbyreWSA&usqp=CAU"
              billingAddress
              shippingAddress
              description={`Your Total is $${cart.total}`}
              amount={cart.total * 100} //Because Stripe is working with cents
              token={onToken}
              stripeKey={KEY}
            >
              <button>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
