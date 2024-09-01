
import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Register = ({ popUp, setPopUp }) => {

    const [register, setRegister] = useState(true);

    const handleToggle = () => {
        setRegister(!register);
    };

    return (
        <>
            {popUp && (
                <div id ="register" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white py-10 px-10 shadow-md rounded-md duration-200 w-[90%] sm:w-[500px] mx-auto">
                        <div className="mb-4 flex justify-between">
                            <h1 className='text-white'>hello</h1>
                            <IoCloseOutline
                                className="text-2xl cursor-pointer hover:text-red-800"
                                onClick={() => setPopUp(false)}
                            />
                        </div>

                        {/* Conditional Rendering for Forms */}
                        {register ? (
                            <form className="flex flex-col space-y-4">
                                <h1 className="text-2xl font-bold text-dark capitalize">Create Account</h1>

                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Full Name"
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="reg-email"
                                    placeholder="Email"
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="number"
                                    min={0}
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone"
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Your Delivery address"
                                    className="form-input"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="self-end  bg-coral-red font-montserrat text-lg p-2 text-white rounded-md px-4 hover:scale-105 duration-300"
                                >
                                    Create Account
                                </button>
                               
                            </form>
                        ) : (
                            <form className="flex flex-col space-y-4">
                                <h1 className="text-2xl font-bold text-dark capitalize">sign in</h1>
                                <input
                                    type="email"
                                    name="email"
                                    id="sign-email"
                                    placeholder="Email ID"
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="form-input"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="self-end bg-coral-red font-montserrat text-lg p-2 text-white rounded-md px-8 hover:scale-105 duration-300"
                                >
                                    Sign In
                                </button>
                            </form>
                            
                        )}
                        <p className="text-md mt-6">
                                <span 
                                  className='underline cursor-pointer font-montserrat text-slate-700 hover:text-green-800' 
                                  onClick={handleToggle}
                                >
                                  {register ? "Already have an account? Sign in" : "Don't have an account? Create here"}
                                </span>
                            </p>
                    </div>
                </div>
            )}
            
        </>
    );
};

export default Register;

