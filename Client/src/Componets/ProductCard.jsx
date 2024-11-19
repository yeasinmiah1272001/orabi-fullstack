import React from "react";
import AddToCart from "./AddToCart";
import PriceContainer from "./PriceContainer";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="bg-[#F3F3F3] rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 hover:shadow-black ">
      <div className="relative">
        <Link to={`/single/${item._id}`}>
          <img
            src={item.images[0]}
            alt={item.name}
            className="w-full h-48 object-cover p-5 hover:scale-95 duration-300"
          />
        </Link>
        {item?.offer && (
          <div className="absolute top-2 right-2 bg-orange-300 rounded-md text-xs font-semibold text-white p-1 px-3 hover:bg-black transition-colors duration-300">
            Sale
          </div>
        )}
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800 truncate">
          {item.name}
        </h1>
        <div>
          <PriceContainer product={item} />
        </div>
      </div>
      <AddToCart product={item} />
    </div>
  );
};

export default ProductCard;
