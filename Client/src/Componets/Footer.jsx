import { navlink } from "../Constant";
import Container from "./Container";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { paymentCard } from "../assets/images";

const Footer = () => {
  const navlink = [
    { title: "Accesories", link: "/" },
    { title: "Clothes", link: "/Clothes" },
    { title: "Electronics", link: "/Electronics" },
    { title: "Home appliances", link: "/Home appliances" },
    { title: "New Arrivals", link: "/New Arrivals" },
  ];

  const nav = [
    { title: "Profile", link: "/" },
    { title: "Orders", link: "/Orders" },
    { title: "Addresses", link: "/Addresses" },
    { title: "Account Details", link: "/Account Details" },
    { title: "Payment Options", link: "/Payment Options" },
  ];

  return (
    <div className="bg-gray-600 text-white  lg:py-28">
      <Container className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mx-auto justify-center items-start">
        {/* First column */}
        <div className="space-y-4">
          <h1 className="text-lg lg:text-xl font-medium">
            More about Orebi Shop
          </h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
            ab ullam, numquam nesciunt in.
          </p>
          <SocialLinks />
        </div>
        {/* Second column */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Categories</h2>
          <div className="flex flex-col space-y-2">
            {navlink.map((item, index) => (
              <Link
                key={index}
                className="hover:underline text-sm"
                to={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Third column */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Your Account</h2>
          <div className="flex flex-col space-y-2">
            {nav.map((item, index) => (
              <Link
                key={index}
                className="hover:underline text-sm"
                to={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Fourth column */}
        <div className="space-y-4">
          <h1 className="text-lg lg:text-xl font-medium">
            More about Orebi Shop
          </h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
            ab ullam, numquam nesciunt in.
          </p>
          <img
            className="h-16 md:h-20 w-auto"
            src={paymentCard}
            alt="Payment Methods"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
