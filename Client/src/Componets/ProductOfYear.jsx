import { productOfTheYear } from "../assets/images";
import Container from "./Container";

const ProductOfYear = () => {
  return (
    <Container>
      <div className="relative flex items-center justify-center">
        {/* Product Image */}
        <img
          className="w-full h-auto"
          src={productOfTheYear}
          alt="Product of the Year"
        />

        {/* Overlay Text and Button */}
        <div className="absolute top-0 right-0 mt-10 md:mt-16 lg:mt-20 mr-4 md:mr-8 lg:mr-16 p-6 rounded-lg hidden md:block">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Product Of The Year
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            laboriosam?
          </p>
          <button className="mt-4 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProductOfYear;
