import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { saleImgOne, saleImgThree, saleImgTwo } from "../assets/images";

const SelesBanner = () => {
  return (
    <Container className="lg:py-14 py-10">
      <SectionTitle title={"New Arrivals"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* First Image */}
        <div
          className="col-span-2 lg:row-span-6 bg-cover bg-center relative h-[300px] sm:h-[400px] lg:h-[500px]"
          style={{ backgroundImage: `url(${saleImgOne})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 bg-black bg-opacity-30">
            <h1 className="text-white text-2xl font-bold mb-3 text-left w-1/2">
              10% sales ongoing phone Offers on limited time
            </h1>
            <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Second Image */}
        <div
          className="col-span-2 lg:col-start-3 lg:row-span-3 bg-cover bg-center relative h-[300px] sm:h-[250px]"
          style={{ backgroundImage: `url(${saleImgThree})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-black bg-opacity-30">
            <h1 className="text-white text-2xl font-bold mb-3 text-left">
              <p>
                10% sales ongoing on phone <br /> Offers on limited time
              </p>
            </h1>
            <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
              View More
            </button>
          </div>
        </div>

        {/* Third Image */}
        <div
          className="col-span-2 lg:col-start-3 lg:row-span-3 bg-cover bg-center relative h-[300px] sm:h-[250px]"
          style={{ backgroundImage: `url(${saleImgTwo})` }}
        >
          <div className="absolute inset-0 flex flex-col  justify-center items-start p-8 bg-black bg-opacity-30">
            <h1 className="text-white text-2xl font-bold mb-3 text-left">
              <p>
                10% sales ongoing on phone <br /> Offers on limited time
              </p>
            </h1>
            <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-800 hover:text-white duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SelesBanner;
