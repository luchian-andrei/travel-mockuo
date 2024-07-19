import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <nav className="w-1/3 flex justify-between items-center absolute top-8 text-white text-xl">
      <Link to={"/"}>
        <p className="hover:text-black transition-colors duration-300">Home</p>
      </Link>
      <Link to={"/rio"}>
        <p className="hover:text-black transition-colors duration-300">Rio</p>
      </Link>{" "}
      <Link to={"/contact"}>
        <p className="hover:text-black transition-colors duration-300">
          Contact
        </p>
      </Link>
    </nav>
  );
};

export default DesktopNav;
