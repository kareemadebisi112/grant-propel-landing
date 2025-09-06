import { motion } from "framer-motion";

const Eclipse = ({ className = "", glow = false }) => {
  // Animation variants
  const normalVariant = {
    initial: {
      opacity: 0.85,
      scale: 0.99,
    },
    animate: {
      opacity: [0.85, 0.9, 0.85],
      scale: [0.99, 1.01, 0.99],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariant = {
    initial: {
      opacity: 0.85,
      scale: 0.99,
      boxShadow: "0 0 0 rgba(0, 206, 103, 0.4)",
    },
    animate: {
      opacity: [0.85, 0.95, 0.85],
      scale: [0.99, 1.03, 0.99],
      boxShadow: [
        "0 0 5px rgba(0, 206, 103, 0.4)",
        "0 0 12px rgba(0, 206, 103, 0.6)",
        "0 0 5px rgba(0, 206, 103, 0.4)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const selectedVariant = glow ? glowVariant : normalVariant;

  return (
    <motion.div
      className={`rounded-full w-10/12 h-10/12 ${className}`}
      style={{
        background:
          "linear-gradient(209.96deg, rgba(0, 206, 103, 0.2) 13.02%, rgba(0, 206, 103, 0) 34.75%, rgba(0, 206, 103, 0) 58.59%, rgba(0, 206, 103, 0.2) 86.61%)",
      }}
      initial="initial"
      animate="animate"
      variants={selectedVariant}
    ></motion.div>
  );
};

export default Eclipse;
