"use client";

import { useState } from "react";
import { SiOpenaigym } from "react-icons/si";
import { IoClose, IoMenu } from "react-icons/io5";

import { topNavData } from "@/data/navigationData";
import { companyName } from "@/constants/string";
import ButtonComponent from "../common/ButtonComponent";

const NavigationComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleSignup = () => {
    console.log("Signup clicked");
  };

  return (
    <div className="relative">
      {/* Desktop and Tablet Navigation */}
      <div className="hidden md:flex flex-row justify-between w-full">
        {/* Left section */}
        <div className="flex flex-row gap-2 items-center justify-start">
          <SiOpenaigym size={35} />
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-extrabold">
            {companyName}
          </p>
        </div>

        {/* Center section with nav links */}
        <div className="flex flex-row gap-0 items-center justify-center">
          {topNavData.map((item) => (
            <div key={item.id}>
              <ButtonComponent
                isYellow={false}
                label={item.label}
                onClick={() => item.href}
              />
            </div>
          ))}
        </div>

        {/* Right section with login/signup buttons */}
        <div className="flex flex-row gap-0 items-center justify-end">
          <div>
            <ButtonComponent
              isYellow={false}
              label="Login"
              onClick={handleLogin}
            />
          </div>
          <div>
            <ButtonComponent
              isYellow={true}
              label="Signup"
              onClick={handleSignup}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden flex items-center justify-between w-full`}>
        <div className="flex items-center">
          <SiOpenaigym className="h-[24px] w-[24px]" />
          <p className="text-2xl text-white font-extrabold ml-2">
            {companyName}
          </p>
        </div>

        <div className="flex items-center">
          {!isMenuOpen && (
            <IoMenu
              size={30}
              className="text-white"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-0 right-0 w-[50%] h-[90vh] bg-dark-1 z-10 py-2 flex flex-col transition-transform transform"
          style={{
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="flex items-center justify-end">
          <IoClose
              size={30}
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Menu links */}
          <div className="flex flex-col items-start gap-6 mt-10 px-4">
            {topNavData.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-white text-lg hover:text-yellow-400 flex flex-row gap-4 items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span><item.icons/></span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Bottom section with login/signup buttons */}
          <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-4 px-4">
            <div className="border-b border-white w-full"/>
            <ButtonComponent
              isYellow={false}
              label="Login"
              onClick={() => {
                handleLogin();
                setIsMenuOpen(false);
              }}
            />
            <ButtonComponent
              isYellow={true}
              label="Signup"
              onClick={() => {
                handleSignup();
                setIsMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationComponent;
