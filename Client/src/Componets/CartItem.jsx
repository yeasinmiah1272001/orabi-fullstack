import React from "react";
import PriceContainer from "./PriceContainer";
import AddToCart from "./AddToCart";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/orabiSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr className="border-b hover:bg-gray-100 transition-all">
      {/* Product Details */}
      <td className="p-4 flex items-center gap-2 ">
        <span
          onClick={() =>
            dispatch(
              deleteProduct(item._id),
              toast.success(`${item.name} deleted success`)
            )
          }
          className="h-10 w-10 rounded-full flex items-center justify-center cursor-pointer transition duration-300 bg-red-300 hover:bg-gray-400 text-white"
        >
          <IoClose />
        </span>
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-16 h-16 rounded-md object-cover"
        />
        <span>{item.name}</span>
      </td>
      {/* Price */}
      <td className="p-4">
        <PriceContainer product={item} />
      </td>
      {/* Quantity */}
      <td className="p-4">
        <AddToCart product={item} />
      </td>
      {/* Subtotal */}
      <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
