import { useEffect, useState, useRef } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import ProductCard from "./ProductCard";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewArrival = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/product/list`
      );
      const data = response?.data;
      if (data.success) {
        setProduct(data.products);
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

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container>
      <SectionTitle title={"New Arrival"} />
      <div className="flex justify-end gap-10 items-center">
        <button
          onClick={previous}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
          <FaArrowCircleLeft size={30} />
        </button>
        <button
          onClick={next}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
        >
          <FaArrowCircleRight size={30} />
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          <p className="ml-3 text-blue-600 text-lg">Loading...</p>
        </div>
      ) : (
        <Slider
          ref={sliderRef}
          {...settings}
          className="space-x-6" // Tailwind gap between cards
        >
          {product.length > 0 ? (
            product.map((item) => (
              <div key={item._id} className="p-2">
                <ProductCard item={item} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No new arrivals found.
            </p>
          )}
        </Slider>
      )}
    </Container>
  );
};

export default NewArrival;
