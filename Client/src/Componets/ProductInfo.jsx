import SectionTitle from "./SectionTitle";
import AddToCart from "./AddToCart";
import PriceContainer from "./PriceContainer";

const ProductInfo = ({ product }) => {
  return (
    <div className="space-y-6 p-6 max-w-3xl mx-auto bg-white  rounded-lg">
      <SectionTitle title={product?.name} />

      <div className="flex gap-4 items-center">
        <PriceContainer product={product} />
      </div>

      <p className="text-gray-700">{product?.description}</p>

      <div className="space-y-2 text-lg text-gray-800">
        <h1>
          <span className="font-semibold">Category:</span>{" "}
          <span>{product?.category}</span>
        </h1>
        <h1>
          <span className="font-semibold">Brand:</span>{" "}
          <span>{product?.band}</span>
        </h1>
      </div>

      <div className="mt-4">
        <AddToCart
          className="w-full  mx-auto text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          product={product}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
