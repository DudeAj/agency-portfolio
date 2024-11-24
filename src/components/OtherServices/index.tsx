'use client';
import { motion } from "framer-motion";
import { otherServices } from "../../constants";
import Tag from "../ui/Tag";

const OtherServices = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-4/5 overflow-hidden relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Faster speed
          }}
        >
          {otherServices.map((service, index) => (
            <Tag key={index} className="flex gap-2 flex-shrink-0">
              {service.icon} {service.title}
            </Tag>
          ))}
          {/* Duplicate the content for seamless looping */}
          {otherServices.map((service, index) => (
            <Tag key={`clone-${index}`} className="flex gap-2 flex-shrink-0">
              {service.icon} {service.title}
            </Tag>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OtherServices;
