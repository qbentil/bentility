import React from "react";
import { Button } from "../../types";

const Button = ({
  text,
  icon,
  disabled,
  onClick,
  type,
  shape,
  bgColor,
  bgHoverColor,
  textColor,
  textHoverColor,
}: Button) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled || false}
      className={`flex gap-3 outline-none justify-center items-center cursor-pointer  py-2 px-4 w-max transition-all duration-100 ease-in-out
      ${shape || "rounded-full"}
      ${bgColor || "bg-primary"}
      hover:${bgHoverColor || "bg-active-bg"}
      ${textColor || "text-white"}
      hover:${textHoverColor || "text-active"}
      `}
      onClick={onClick}
    >
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default Button;
