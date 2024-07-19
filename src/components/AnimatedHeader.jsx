/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const animations = {
  initial: { x: 1000 },
  animate: { x: 0 },
  exit: { x: -1000 },
};

const AnimatedHeader = ({ children, className }) => {
  return (
    <motion.div
      variants={animations}
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: [0.17, 0.67, 0.83, 0.67] }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedHeader;
