import { motion } from "framer-motion";

const Eclipse = ({ className = "", glow = false }) => {
  // Animation variants
  const normalVariant = {
    initial: {
      opacity: 0.8,
      scale: 0.98,
    },
    animate: {
      opacity: [0.8, 0.9, 0.8],
      scale: [0.98, 1.02, 0.98],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariant = {
    initial: {
      opacity: 0.8,
      scale: 0.98,
      boxShadow: "0 0 0 rgba(0, 206, 103, 0.4)",
    },
    animate: {
      opacity: [0.8, 1, 0.8],
      scale: [0.98, 1.05, 0.98],
      boxShadow: [
        "0 0 10px rgba(0, 206, 103, 0.4)",
        "0 0 20px rgba(0, 206, 103, 0.6)",
        "0 0 10px rgba(0, 206, 103, 0.4)",
      ],
      transition: {
        duration: 3,
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
