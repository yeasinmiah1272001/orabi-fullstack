import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import img1 from "../assets/images/banner/5.jpg";
import img2 from "../assets/images/banner/7.jpg";
import img3 from "../assets/images/banner/4.jpg";
import img4 from "../assets/images/banner/6.jpg";
import img5 from "../assets/images/banner/8.webp";

const SpecialCollection = () => {
  return (
    <Container>
      <SectionTitle title={"Special Collections"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 grid-rows-8 gap-3">
        <div className="relative col-span-1 sm:col-span-3 row-span-4">
          <img src={img1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Special Collection 1</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-2 row-span-4 sm:col-start-4 bg-slate-300">
          <img src={img2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Special Collection 2</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-2 md:col-span-2 row-span-8 col-start-6 bg-slate-200">
          <img src={img3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Special Collection 3</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-3 row-span-4 col-start-3 row-start-5 bg-slate-600">
          <img src={img4} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Special Collection 4</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 sm:col-span-2 row-span-4 col-start-1 row-start-5">
          <img src={img5} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all flex items-center justify-center text-white">
            <div className="text-center">
              <h3 className="text-lg font-bold">Special Collection 5</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SpecialCollection;
