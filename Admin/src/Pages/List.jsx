import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../../Config";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log("list", list);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${serverUrl}/api/product/list`);
      const data = response?.data;
      if (data.success) {
        setList(data.products);
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

  const handleDelete = async (_id) => {
    try {
      setLoading(true);
      const response = await axios.post(`${serverUrl}/api/product/remove`, {
        _id,
      });
      const data = response.data;
      if (data.success) {
        toast.success("product deleted successfully");
        fetchData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Delete Product error:", error);
      toast.error("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <Loading />
      ) : list.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">
              Product List : {list.length}
            </h1>
            <Link
              to={"/add"}
              className="text-black border border-gray-400 bg-transparent hover:bg-black hover:text-white py-2 px-4 rounded-md duration-300"
            >
              Add To Users
            </Link>
          </div>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-gray-600">Image</th>
                <th className="px-6 py-3 text-left text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-gray-600">Category</th>
                <th className="px-6 py-3 text-left text-gray-600">Price</th>
                <th className="px-6 py-3 text-left text-gray-600">Action</th>
                <th className="px-6 py-3 text-left text-gray-600">Edit</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-100 border-b border-gray-200"
                >
                  <td className="px-6 py-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <h1 className="text-gray-800 font-medium">{item.name}</h1>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.category}</td>
                  <td className="px-6 py-4 text-gray-600">${item.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-3 py-1 text-white bg-red-400 hover:bg-red-500 rounded duration-200"
                    >
                      <MdDelete />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 text-white bg-green-400 hover:bg-green-600 rounded">
                      <MdModeEditOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default List;
