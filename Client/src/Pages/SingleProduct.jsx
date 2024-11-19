import React, { useEffect, useState } from "react";
import Container from "../Componets/Container";
import SectionTitle from "../Componets/SectionTitle";
import { serverUrl } from "../../Config";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductInfo from "../Componets/ProductInfo";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log("single", product);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${serverUrl}/api/product/single?_id=${id}`
      );
      const data = response?.data;
      if (data.success) {
        setProduct(data.product);
        // console.log("data", data);
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
    <Container className={"grid  md:grid-cols-2 gap-10"}>
      <div className="w-full h-[400px] ">
        <img
          src={product?.images[0]}
          alt=""
          className="w-full h-full rounded-md object-cover hover:scale-95 duration-300"
        />
      </div>
      <ProductInfo product={product} />
    </Container>
  );
};

export default SingleProduct;
