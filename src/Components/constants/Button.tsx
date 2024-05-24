import React from "react";
import { IoMdPersonAdd } from "react-icons/io";

interface ButtonProps {
  text: string;
  onClick: () => void;
  width?: string;
  variant?: "edit" | "delete" | "default";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  width,
  variant = "default",
  className,
}) => {
  const baseStyles =
    "p-2 text-base uppercase w-full rounded hover:shadow-md font-medium tracking-widest flex items-center justify-center";
  
  let variantStyles = "";
  if (variant === "edit") {
    variantStyles = "border border-green-500 text-green-500";
  } else if (variant === "delete") {
    variantStyles = "border border-red-400 text-red-400 hover:bg-red-100";
  } else {
    variantStyles = "bg-customPurple text-white p-4";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${width ? width : "w-half"} ${className}`}
    >
      {variant === "default" && <IoMdPersonAdd className="inline-block mr-2" size={22} />}
      {text}
    </button>
  );
};

export default Button;