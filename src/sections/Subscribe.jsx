
import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="w-full flex flex-col items-center gap-10 max-lg:flex-col"
    >
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold">
        Sign Up for latest <span className="text-coral-red">updates</span> &
        Newsletter
      </h3>
     
      <div className="lg:w-3/4 w-full flex items-center gap-2 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@myshoe.com"
          className="input flex-grow"
        />
        <Button label="Sign Up" roundedFull />
      </div>
    </section>
  );
};

export default Subscribe;


