import axios from "axios";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { serverUrl } from "../../Config";
import toast from "react-hot-toast";

const Add = ({ token }) => {
  const [formData, setFormData] = useState({
    name: "",
    band: "",
    price: "",
    discountedPersentage: "",
    description: "",
    _type: "",
    category: "",
    offer: false,
    isAvailabel: true,
    badge: false,
    tags: [],
    image1: null,
    image2: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const { id, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: files[0],
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: checked
        ? [...prevFormData.tags, value]
        : prevFormData.tags.filter((tag) => tag !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          data.append(key, value);
        } else {
          data.append(key, value);
        }
      });
      const response = await axios.post(serverUrl + "/api/product/add", data, {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      });
      const respnseData = await response.data;
      if (respnseData.success) {
        toast.success(respnseData?.message);
      } else {
        toast.error(respnseData.message);
      }
    } catch (error) {
      console.log("product data no added", error);
    }
  };

  return (
    <div className="p-8 mx-auto bg-white rounded-md shadow-md">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          {["image1", "image2"].map((imageId) => (
            <label htmlFor={imageId} key={imageId}>
              <div className="border border-dashed border-gray-400 p-2">
                {formData[imageId] ? (
                  <img
                    className="w-16 object-cover"
                    src={URL.createObjectURL(formData[imageId])}
                    alt=""
                  />
                ) : (
                  <FaCloudUploadAlt className="text-5xl" />
                )}
                <input
                  type="file"
                  hidden
                  id={imageId}
                  onChange={handleImageChange}
                />
                <p>{formData[imageId] ? "Change" : "Upload"}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter product name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="band"
              className="block text-sm font-medium text-gray-700"
            >
              Product Brand
            </label>
            <input
              type="text"
              name="band"
              value={formData.band}
              onChange={handleInputChange}
              placeholder="Enter product brand"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter product price"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="discountedPersentage"
              className="block text-sm font-medium text-gray-700"
            >
              Product Discount
            </label>
            <input
              type="number"
              name="discountedPersentage"
              value={formData.discountedPersentage}
              onChange={handleInputChange}
              placeholder="Enter product discount"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Product Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter product description"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="_type"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </label>
            <select
              name="_type"
              value={formData._type}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option disabled>Select Type</option>
              <option>New Arrivals</option>
              <option>Best Sellers</option>
              <option>Special Offers</option>
              <option>Promotion</option>
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option disabled>Select Category</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Accessories</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/3">
            <label
              htmlFor="offer"
              className="block text-sm font-medium text-gray-700"
            >
              Offers
            </label>
            <select
              name="offer"
              value={formData.offer}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option disabled>Select Offer</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="w-1/3">
            <label
              htmlFor="isAvailabel"
              className="block text-sm font-medium text-gray-700"
            >
              Available
            </label>
            <select
              name="isAvailabel"
              value={formData.isAvailabel}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option disabled>Select Availability</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <div className="w-1/3">
            <label
              htmlFor="badge"
              className="block text-sm font-medium text-gray-700"
            >
              Badge
            </label>
            <select
              name="badge"
              value={formData.badge}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option disabled>Select Badge</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags
          </label>
          {["Fashions", "Electronics", "Sports", "Accessories", "Others"].map(
            (tag) => (
              <div key={tag}>
                <input
                  type="checkbox"
                  name="tags"
                  value={tag}
                  checked={formData.tags.includes(tag)}
                  onChange={handleCheckboxChange}
                  className="checkbox"
                />
                <span className="ml-2">{tag}</span>
              </div>
            )
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Your Product
        </button>
      </form>
    </div>
  );
};

export default Add;
