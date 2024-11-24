import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Componets/Layout/RootLayout.jsx";
import Shop from "./Pages/Shop.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Order from "./Pages/Order.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import CategoryDetails from "./Pages/CategoryDetails.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import toast, { Toaster } from "react-hot-toast";
import CartPage from "./Pages/CartPage.jsx";
import Signin from "./Pages/Signin.jsx";
import Signup from "./Pages/Signup.jsx";
import Profile from "./Pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/single/:id",
        element: <SingleProduct />,
      },
      {
        path: "/Order",
        element: <Order />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/categorydetails/:id",
        element: <CategoryDetails />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
