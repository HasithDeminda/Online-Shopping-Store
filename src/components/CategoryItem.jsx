import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className="container-categoryItem">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" />
        <div className="info">
          <h1 className="title">{item.title}</h1>
          <button className="info-button">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
