import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { serverUrl } from "../../Config";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(serverUrl + `/api/product/list`);
      const data = response?.data;
      if (data.success) {
        setProduct(data.products);
        // console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <SectionTitle title={"Tranding Product"} />

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          <p className="ml-3 text-blue-600 text-lg">Loading...</p>
        </div>
      ) : (
        <div className="py-8">
          {product.length > 0 ? (
            <Marquee gradient={false} speed={50}>
              <div className="flex space-x-16">
                {product.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col items-center p-2 bg-white rounded-lg   duration-300 ease-out"
                  >
                    <Link to={`/categorydetails/${item._id}`}>
                      <img
                        src={item.images[1]}
                        alt={item.name}
                        className="w-36 h-36 rounded-full object-cover mb-4 border-2 border-gray-200"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </Marquee>
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No new arrivals found.
            </p>
          )}
        </div>
      )}
    </Container>
  );
};

export default CategorySection;
