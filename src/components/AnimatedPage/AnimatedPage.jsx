import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
