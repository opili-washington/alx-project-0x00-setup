import React from "react";

interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string; // optional custom styles
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  const sizeClasses: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
