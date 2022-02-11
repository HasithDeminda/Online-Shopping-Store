import React from "react";
import "./SuccessPayment.scss";

const SuccessPayment = () => {
  return (
    <div className="container-successPayment">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Pb53Hmc2ru1ZCtFSGjWp8L1vdWqbyreWSA&usqp=CAU"
        alt=""
      />
      <button>Payment Successfull ✔️</button>
      <span>
        Your order is being prepared! Wait for the confirmation.
        <br />
        Thank You for shopping with <strong>ZigZag</strong>
      </span>
    </div>
  );
};

export default SuccessPayment;
