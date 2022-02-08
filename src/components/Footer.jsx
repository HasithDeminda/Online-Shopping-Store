import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Pinterest from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer-left">
        <h1 className="logo">Binary Crew</h1>
        <p className="description">
        "My Shoppng Store" Inc. is a global commerce leader that connects millions of buyers and sellers in more than 190 markets around the world. We exist to enable economic opportunity for individuals, entrepreneurs, businesses and organizations of all sizes.
        </p>
        <div className="socialmedia-container">
          <div className="socialIcon" style={{ backgroundColor: "#3B5999" }}>
            <FacebookIcon />
          </div>
          <div className="socialIcon" style={{ backgroundColor: "#55ACEE" }}>
            <TwitterIcon />
          </div>
          <div className="socialIcon" style={{ backgroundColor: "#E4405F" }}>
            <InstagramIcon />
          </div>
          <div className="socialIcon" style={{ backgroundColor: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="title">Links</h3>
        <ul className="List">
          <li>Home</li>
          <li>Card</li>
          <li>Men's Wears</li>
          <li>Women's Wears</li>
          <li>Kid's Wears</li>
          <li>My Account</li>
          <li>Wishlist</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-right">
        <div className="title">Contact</div>
        <div className="contact-item">
          <LocationOnIcon style={{ marginRight: "10px" }} />
          No 1, Galle Road, Colombo 7, Sri Lanka
        </div>
        <div className="contact-item">
          <CallIcon style={{ marginRight: "10px" }}/>
          +94 71 707 4723
        </div>
        <div className="contact-item">
          <EmailIcon style={{ marginRight: "10px" }}/>
          BinaryCrew@gmail.com
        </div>
        <img
          className="payment-img"
          alt=""
          src="https://res.cloudinary.com/desnqqj6a/image/upload/v1644214344/pngegg_vd2sm9.png"
        />
      </div>
    </div>
  );
};

export default Footer;
