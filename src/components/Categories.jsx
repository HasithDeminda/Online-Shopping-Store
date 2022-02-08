import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import './Categories.scss'

const Categories = () => {
  return (
    <div className="container-categories">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default Categories;
