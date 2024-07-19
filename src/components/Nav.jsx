/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = ({ handleMenu }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>{width > 768 ? <DesktopNav /> : <MobileNav handleMenu={handleMenu} />}</>
  );
};

export default Nav;
