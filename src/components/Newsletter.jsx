import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="container-newsletter">
      <h1 className="title">Newsletter</h1>
      <div className="description">
        Get timely updates from your favourite products.
      </div>
      <div className="inputContainer">
        <input placeholder="Your Email" />
        <button className="send-btn">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
