import React from "react";
import "./categoryProduct.css";

const CategoryProduct = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="menu-categories">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-button ${
            selectedCategory === Number(category.id) ? "active" : ""
          }`}
          onClick={() => onSelectCategory(Number(category.id))}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryProduct;
