import { useAnimation, motion } from "framer-motion";
import { useState } from "react";

export default function ActionButton({ icon, handleClick }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex items-center justify-center w-20 cursor-pointer">
      <button onClick={handleClick} className="cursor-pointer">
        <motion.img
          src={icon}
          className="w-6 h-6"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          animate={
            isHovering
              ? {
                  rotate: [0, -10, 10, -10, 10, -10, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : {
                  rotate: 0,
                  transition: { duration: 0.3 },
                }
          }
          whileHover={{ scale: 1.3 }}
        />
      </button>
    </div>
  );
}
