import React from "react";
import "./CategoryItem.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className="container-categoryItem">
      <img src={item.img} alt="" />
      <div className="info">
        <h1 className="title">{item.title}</h1>
        <button className="info-button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
