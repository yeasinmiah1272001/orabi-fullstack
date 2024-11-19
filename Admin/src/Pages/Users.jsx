import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { serverUrl } from "../../Config";
import Loading from "../Components/Loading";
import { IoClose } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import ModalDialouge from "../Components/ModalDialouge";
import UpdateModal from "../Components/updateModal";

const Users = ({ token }) => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const modalRef = useRef(null);
  const updateModalRef = useRef(null);

  const handleGetUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${serverUrl}/api/user/users`, {
        headers: {
          token,
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      if (data.success) {
        setUserList(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("User list fetch error:", error);
      toast.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleDelete = async (_id) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${serverUrl}/api/user/remove`, {
        _id,
      });
      const data = response.data;
      if (data.success) {
        toast.success("User deleted successfully");
        handleGetUser();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Delete user error:", error);
      toast.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const formData = { name, email, password };
    // console.log(formData);

    try {
      const response = await axios.post(
        `${serverUrl}/api/user/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = response.data;
      if (result.success) {
        toast.success("User added successfully");
        handleGetUser();
        modalRef.current.close();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error: " + error.message);
    }
  };

  const handleUpdate = async (e, _id) => {
    e.preventDefault();
    const updatedUser = {
      _id: selectedUser._id,
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await axios.put(
        `${serverUrl}/api/user/update/${_id}`,
        updatedUser,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;
      if (data.success) {
        toast.success("User updated successfully");
        handleGetUser();
        setSelectedUser(null);
        updateModalRef.current.close();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Update user error:", error);
      toast.error("Error: " + error.message);
    }
  };

  const handleAdmin = async (user) => {
    const updatedUser = {
      _id: user._id,
      isAdmin: true,
      name: user.name,
      email: user.email,
      password: user.password,
    };
    console.log(user);

    try {
      const response = await axios.put(
        `${serverUrl}/api/user/update/${user._id}`,
        updatedUser,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;
      console.log("data", data);
      if (data.success) {
        toast.success("User promoted to Admin successfully");
        handleGetUser();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error promoting user to admin:", error);
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div className="p-4">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">
              User List : {userList.length}
            </h1>
            <button
              onClick={() => modalRef.current.showModal()}
              className="text-black border border-gray-400 bg-transparent hover:bg-black hover:text-white py-2 px-4 rounded-md duration-300"
            >
              Add To Users
            </button>
            <ModalDialouge handleAdd={handleAdd} modalRef={modalRef} />
          </div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Serial No</th>
                <th className="px-4 py-2 border-b">Username</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Actions</th>
                <th className="px-4 py-2 border-b">Edit</th>
                <th className="px-4 py-2 border-b">Admin</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      disabled={user.isAdmin}
                      className={`px-3 py-1 text-white rounded ${
                        user.isAdmin
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-400"
                      }`}
                    >
                      <IoClose />
                    </button>
                  </td>

                  <td className="px-4 py-2 border-b text-center">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        updateModalRef.current.showModal();
                      }}
                      className="px-3 py-1 text-white bg-green-400 hover:bg-green-600 rounded"
                    >
                      <MdModeEditOutline />
                    </button>
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {user.isAdmin ? (
                      <p className="font-semibold  text-green-500">Admin</p>
                    ) : (
                      <p
                        className="cursor-pointer text-blue-500"
                        onClick={() => handleAdmin(user)}
                      >
                        Pending
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <UpdateModal
            handleUpdate={handleUpdate}
            selectedUser={selectedUser}
            modalRef={updateModalRef}
          />
        </div>
      )}
    </div>
  );
};

export default Users;
