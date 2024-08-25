import React from "react";

const Button = ({ label, iconUrl, borderColor, backgroundColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-3 border rounded-lg font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor}`
          : "bg-coral-red rounded-lg text-white"
      }`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
