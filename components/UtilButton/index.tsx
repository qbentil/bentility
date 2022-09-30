import React, { useState } from "react";
import { UtilButton } from "../../types";

const UtilButton = ({ icon, color,title, onClick }: UtilButton) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="relative">
      <div
        className="p-1 rounded-md bg-white hover:scale-105 z-0 cursor-pointer"
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p
          className={`text-${color}  text-lg`}
        >
          {icon}
        </p>
      </div>
      {isHovering && (
        <div className="absolute -top-8 bg-white py-1 px-2 rounded-md">
          <p className="text-[0.65rem] font-semibold capitalize">{title}</p>
        </div>
      )}
    </div>
  );
};

export default UtilButton;
