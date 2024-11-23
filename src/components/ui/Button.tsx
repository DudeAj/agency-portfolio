"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
interface Props {
  small?: boolean;
  className?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  small,
  className = "",
  startIcon,
  endIcon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.9, rotate: 10 }}
      initial={{ scale: 1, rotate: 0 }} // Ensures it starts in the original state
      animate={{ scale: 1, rotate: 0 }} // Resets to the original state after interactionß
      className={`border-button flex justify-center gap-1 text-white px-5 py-3.5 rounded-full ${className} bg-deep-blue ${
        small ? "text-xs" : "text-lg"
      }`}
    >
      {startIcon && startIcon}
      <p className="flex gap-1">{children}</p>
      {endIcon && endIcon}
    </motion.div>
  );
};

export default Button;
