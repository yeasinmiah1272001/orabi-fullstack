import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import Container from "./Container";

const Navbar = ({ token, setToken }) => {
  // console.log("token", token);
  const handleToken = () => {
    setToken("");
  };
  return (
    <div className=" border border-b-gray-500">
      <Container className={"flex justify-between items-center"}>
        <Link to={"/"}>
          <img src={logo} alt="" />
          <p className=" text-sm">Admin panel</p>
        </Link>
        <div>
          <button
            onClick={handleToken}
            className="bg-gray-600 text-white hover:bg-black duration-300 p-2 px-6 rounded-full"
          >
            Logout
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
