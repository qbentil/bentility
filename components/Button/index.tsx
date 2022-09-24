import React from "react";
import { Button } from "../../types";

const Button = ({ text, icon, disabled, onClick, type, shape }: Button) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled || false}
      className={`flex gap-3 outline-none justify-center items-center cursor-pointer bg-primary text-white hover:bg-active-bg hover:text-active py-2 px-4 w-max transition-all duration-100 ease-in-out
      ${shape || "rounded-full"}
      `}
      onClick={onClick}
    >
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default Button;
