import { twMerge } from "tailwind-merge";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deceressQuantity,
  incressQuantity,
} from "../Redux/orabiSlice";
import toast from "react-hot-toast";
import { FiMinus } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { useEffect, useState } from "react";

const AddToCart = ({ product, className }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      if (existingProduct) {
        toast.error(`${product.name} is already in the cart`);
      } else {
        dispatch(addProduct(product));
        toast.success(`${product.name} added successfully`);
      }
    } else {
      toast.error("Product not found");
    }
  };

  const { cart } = useSelector((state) => state.orabi);

  const [existingProduct, setExistingProduct] = useState(null);

  useEffect(() => {
    if (product) {
      const availableProduct = cart.find((item) => item._id === product._id);
      setExistingProduct(availableProduct);
    }
  }, [product, cart]);

  const handleIncrease = () => {
    if (product) {
      dispatch(incressQuantity(product._id));
      toast.success("Product increased successfully");
    }
  };

  const handleDecrease = () => {
    if (product && existingProduct.quantity > 1) {
      dispatch(deceressQuantity(product._id));
      toast.success("Product decreased successfully");
    }
  };

  return (
    <div className="px-4 pb-4">
      {existingProduct ? (
        <div className="flex items-center gap-5">
          <span
            onClick={handleDecrease}
            className={twMerge(
              "h-10 w-10 rounded-full flex items-center justify-center cursor-pointer transition duration-300",
              existingProduct.quantity > 1
                ? "bg-gray-600 hover:bg-gray-400 text-white"
                : "bg-gray-300 cursor-not-allowed text-gray-500"
            )}
          >
            <FiMinus className="text-xl" />
          </span>

          <span className="text-lg font-semibold">
            {existingProduct.quantity}
          </span>

          <span
            onClick={handleIncrease}
            className="h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition duration-300 text-white"
          >
            <LuPlus className="text-xl" />
          </span>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            "w-full bg-gray-600 border border-1 text-white font-medium py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 hover:text-black",
            className
          )}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default AddToCart;
