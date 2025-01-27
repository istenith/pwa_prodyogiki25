"use client";
import React from "react";
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaLock } from "react-icons/fa"; 
import Burger from "../home/components/hamburger";

const SignupPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pb-8 relative">
      <Burger />

      <div className="text-left text-white font-normal pt-10 px-4 text-[18px]">
        WELCOME TO PRODY&apos;25 
      </div>

      <div
        className="p-4 mx-2 mt-9 rounded-3xl opacity h-[700px] flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform"
        style={{
          background:
            "radial-gradient(ellipse 118% 55% at 50% 25%, rgba(77, 192, 231, 0) 41%, rgba(51, 159, 178, 0.7) 100%)",
        }}
      >
        {["name", "email", "branch", "phone number", "password"].map(
          (field, index) => (
            <div key={index} className="mb-9 relative w-full h-[60px] z-20">
              {/* Circle with icon */}
              <div className="absolute mt-2 left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 border-[1px] border-[#FFFFFF] bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0)] rounded-full opacity-45 z-30 flex items-center justify-center">
                
                {field === "name" && <FaUser className="text-white text-2xl" />}
                {field === "email" && <FaEnvelope className="text-white text-2xl" />}
                {field === "branch" && <FaBuilding className="text-white text-2xl" />}
                {field === "phone number" && <FaPhone className="text-white text-2xl" />}
                {field === "password" && <FaLock className="text-white text-2xl" />}
              </div>

              <input
                type={field === "password" ? "password" : "text"}
                id={field}
                name={field}
                className="mt-2 p-2 pl-16 border-[1px] border-[#64deee] bg-gradient-to-r from-[#4FAEBB] to-[#0F293B] text-white rounded-[30px] w-full h-full opacity-50 placeholder-white z-20"
                placeholder={field}
              />
            </div>
          )
        )}

        <div className="mt-12 w-5/6 h-[44px] border-[2.5px] border-[#5BC5BF] rounded-[30px]">
          <button className="w-full h-full text-white py-2 bg-gradient-to-r from-[rgba(32,194,172,1)] to-[rgba(65,164,206,0.11)] rounded-full shadow-[0px_10px_30px_rgba(27,12,87,0.5)]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
