
import React from "react";

const Button = ({ label, iconUrl, borderColor, backgroundColor, fullWidth, roundedFull }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-3 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor}`
          : "bg-coral-red text-white"
      } ${fullWidth ? 'w-full' : ''} ${roundedFull ? 'rounded-full' : 'rounded-lg'}`}
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