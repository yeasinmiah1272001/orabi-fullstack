import React, { useEffect, useState } from "react";
import SectionTitle from "../Componets/SectionTitle";
import Container from "../Componets/Container";
import axios from "axios";
import { serverUrl } from "../../Config";
import ProductCard from "../Componets/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  // Function to fetch products
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(serverUrl + `/api/product/list`);
      const data = response?.data;
      if (data.success) {
        setProducts(data.products);
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

  // Apply filters to the products list
  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    // Filter by price range
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      if (product.price < min || product.price > max) {
        return false;
      }
    }
    return true;
  });

  // Get current products to display based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Pagination buttons
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <SectionTitle title={"Shop Page"} />
      <div className="mt-5 gap-10 flex">
        {/* Filter Section */}
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex bg-gray-200 p-4 rounded-lg">
          <div>
            <h1 className="text-xl font-semibold">Product Filters</h1>

            {/* Category Filter */}
            <div className="mt-4">
              <h2 className="font-medium">Category</h2>
              <select
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {Array.from(new Set(products.map((item) => item.category))).map(
                  (category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mt-4">
              <h2 className="font-medium">Price Range</h2>
              <select
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-200">$101 - $200</option>
                <option value="201-500">$201 - $500</option>
                <option value="500-1000">$500 - $1000</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="w-full lg:w-[75%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentProducts.map((product) => (
              <ProductCard key={product._id} item={product} />
            ))
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <nav>
          <ul className="flex space-x-2">
            {/* Previous Button */}
            <li>
              <button
                onClick={prevPage}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-blue-300"
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {/* Pagination Numbers */}
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-blue-300`}
                >
                  {number}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li>
              <button
                onClick={nextPage}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-blue-300"
                disabled={currentPage === pageNumbers.length}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Shop;
