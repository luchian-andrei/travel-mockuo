/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const MobileNav = ({ handleMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    handleMenu(openMenu);
  }, [openMenu]);

  return (
    <>
      {openMenu === false ? (
        <nav className="w-full mr-8 flex justify-end absolute top-8">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setOpenMenu(true)}
            className="bg-white p-3 rounded-lg text-4xl text-[#6aa3a2] cursor-pointer"
          />
        </nav>
      ) : (
        <nav className="flex w-full h-screen bg-white absolute top-0 flex-col">
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setOpenMenu(false)}
            className=" p-3 rounded-lg text-4xl text-[#6aa3a2] self-end mt-6 mr-6 cursor-pointer"
          />
          <div className="flex flex-col justify-center items-center text-3xl gap-10 mt-16 [&_p]:cursor-pointer">
            <Link
              onClick={(e) => {
                e.preventDefault(), navigate("/"), setOpenMenu(false);
              }}
            >
              <p
                className={`${
                  pathname === "/" ? "text-black" : "text-[#6aa3a2]"
                } transition-colors duration-300`}
              >
                Home
              </p>
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault(), navigate("/rio"), setOpenMenu(false);
              }}
            >
              <p
                className={` ${
                  pathname === "/rio" ? "text-black" : "text-[#6aa3a2]"
                } transition-colors duration-300`}
              >
                Rio
              </p>
            </Link>{" "}
            <Link
              onClick={(e) => {
                e.preventDefault(), navigate("/contact"), setOpenMenu(false);
              }}
            >
              <p
                className={` ${
                  pathname === "/contact" ? "text-black" : "text-[#6aa3a2]"
                } transition-colors duration-300`}
              >
                Contact
              </p>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileNav;
