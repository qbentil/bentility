import React from "react";
import { Button } from "../../types";

const Button = ({ text, icon,  disabled, onClick }: Button) => {
  return (
    <button
      type="button"
      disabled={disabled || false}
      className={`flex gap-3 justify-center items-center cursor-pointer bg-primary text-white hover:bg-active-bg hover:text-active py-2 px-4 w-max rounded-full transition-all duration-75 ease-in-out`}
      onClick={onClick}
    >
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default Button;
