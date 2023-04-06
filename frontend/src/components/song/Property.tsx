import { motion } from "framer-motion";
import { IconMoodHappy } from "@tabler/icons-react";
import React from "react";

interface IconTypeProps {
  width: number;
  height: number;
  className: string;
}

type IconType = (props: IconTypeProps) => JSX.Element;

interface PropertyProps {
    icon: IconType;
    property: string;
    value: number;
}

export function Property({ icon, property, value } : PropertyProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex p-4 align-middle rounded-md"
    >
      {React.createElement(icon, { width: 24, height: 24, className:"text-gray-600" })}
        
      <div className="pl-1 my-auto">
        <p className="text-sm text-gray-600">{property} {value.toFixed(1)}%</p>
      </div>
    </motion.div>
  );
}

export default Property;
