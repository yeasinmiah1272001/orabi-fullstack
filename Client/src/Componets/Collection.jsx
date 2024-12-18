import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import banner1 from "../assets/images/banner/1.jpg";
import banner2 from "../assets/images/banner/2.jpg";

const Collection = () => {
  return (
    <Container>
      <SectionTitle title={"New Collection"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 grid-rows-2 lg:grid-rows-6 gap-4">
        {/* First Banner */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 lg:row-span-4 relative">
          <img
            src={banner1}
            alt="Girls Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 text-black">
            <h1 className="text-black text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-left w-full sm:w-3/4">
              10% Sales on Girls Collection
            </h1>
            <button className="bg-white border border-gray-400 text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Second Banner */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 lg:row-span-4 relative">
          <img
            src={banner2}
            alt="Spring Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 text-black">
            <h1 className="text-black text-2lg sm:text-xl lg:text-xl font-bold mb-3 text-left w-full sm:w-3/4">
              10% Sales on Boys Collection
            </h1>
            <button className="bg-white border border-gray-400 text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Collection;
