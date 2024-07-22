/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0, scaleX: 1 },
  closed: { opacity: 0, x: "+100%", scaleX: 0 },
};

const AnimatedMenu = ({ children, className, isOpen }) => {
  return (
    <motion.nav
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      className={className}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.nav>
  );
};

export default AnimatedMenu;
