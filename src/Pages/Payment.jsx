import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const STRIPE_API_PUBLISH_KEY =
  "pk_test_51KRaeQFn4SlLpw7cZhCX0URUJplnkrZkm4iB0djZawuTdo1pGP7vxMbkTLjck3XscWa8MAzO8kt1oJCVaOY6EfoQ00HFE9nRH6";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  //Method for token
  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken
            ,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/paid");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <div
      className="container-pay-button"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <StripeCheckout
        name="ZigZag Shopping"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Pb53Hmc2ru1ZCtFSGjWp8L1vdWqbyreWSA&usqp=CAU"
        billingAddress
        shippingAddress
        description="Your Total is $20"
        amount={2000} //Because Stripe is working with cents
        token={onToken}
        stripeKey={STRIPE_API_PUBLISH_KEY}
      >
        <button
          style={{
            border: "none",
            color: "white",
            backgroundColor: "green",
            padding: "20px",
            fontSize: "20px",
            borderRadius: "10px",
            width: "150px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
