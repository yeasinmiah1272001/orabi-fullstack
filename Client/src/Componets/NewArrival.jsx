import { useEffect, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import ProductCard from "./ProductCard";

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

  return (
    <Container>
      <SectionTitle title={"New Arrival"} />

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          <p className="ml-3 text-blue-600 text-lg">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.length > 0 ? (
            product.map((item) => <ProductCard item={item} key={item._id} />)
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

export default NewArrival;
