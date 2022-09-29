import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

const ProductItem = ({ id, imageUrl, price, title, category }) => {
  return (
    <Link to={`product/${id}`}>
      <div className="aspect-square p-4 bg-white relative">
        <img
          src={imageUrl}
          alt="product-image"
          className="w-full h-full object-contain"
        />
        <p className="font-bold p-2 bg-white absolute bottom-4 right-4">
          PHP {price}
        </p>
      </div>
      <div>
        <header className="font-bold line-clamp-1">{title}</header>
        <p className="italic text-slate-500">{category}</p>
      </div>
      <ButtonComponent>Add to bag</ButtonComponent>
    </Link>
  );
};

export default ProductItem;
