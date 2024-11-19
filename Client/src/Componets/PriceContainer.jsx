import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PriceContainer = ({ product }) => {
  const { cart } = useSelector((state) => state.orabi);

  const [existingProduct, setExistingProduct] = useState(null);

  useEffect(() => {
    if (product) {
      const availableProduct = cart.find((item) => item._id === product?._id);
      setExistingProduct(availableProduct);
    }
  }, [product, cart]);

  const regularPrice = existingProduct
    ? existingProduct.quantity * existingProduct.price
    : product?.price;

  const oldPrice = existingProduct
    ? existingProduct.quantity *
      (product?.price + (product?.discountedPersentage / 100) * product?.price)
    : product?.price + (product?.discountedPersentage / 100) * product?.price;

  return (
    <div className="flex gap-3 items-center">
      <p className="text-xl text-black line-through">
        {oldPrice?.toFixed(2)} {/* Formats to 2 decimal places */}
      </p>
      <p className="text-xl text-black font-semibold">
        {regularPrice?.toFixed(2)} {/* Formats to 2 decimal places */}
      </p>
    </div>
  );
};

export default PriceContainer;
