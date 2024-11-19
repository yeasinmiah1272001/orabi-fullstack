import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Users from "./Pages/Users";
import List from "./Pages/List";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import ModalDialouge from "./Components/ModalDialouge";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <main className="bg-gray-50 min-h-screen w-full">
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          {/* Navbar - sticky at the top */}
          <div className="sticky top-0 left-0 w-full z-50 bg-gray-50">
            <Navbar token={token} setToken={setToken} />
          </div>

          <div className="flex w-full">
            {/* Sidebar (fixed and below Navbar) */}
            <div className="w-[18%] fixed top-[4.5rem] left-0 min-h-screen bg-white shadow-md border-r border-gray-300 z-10">
              <Sidebar />
            </div>

            {/* Main content */}
            <div className="flex-1 ml-[18%] px-8 py-6">
              <div>
                <Routes>
                  <Route
                    path="/"
                    element={<Home token={token} setToken={setToken} />}
                  />
                  <Route path="add" element={<Add />} token={token} />
                  <Route
                    path="users"
                    element={<Users token={token} setToken={setToken} />}
                  />
                  <Route
                    path="list"
                    element={<List token={token} setToken={setToken} />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default App;
