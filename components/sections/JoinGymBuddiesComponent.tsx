"use client";

import { useState } from "react";
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from "../common/TextInputComponent";
import { joinButtonText, joinTitle } from "@/constants/string";

const JoinGymBuddiesComponent = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log("Form submitted");
    
    setTimeout(() => {
      setEmail("");
      setEmailError("");
    }, 5000);
  };

  const handleBlur = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row px-10 md:px-36 py-8 items-center w-full bg-purple-500 gap-6 md:gap-0">
      <div className="w-full md:w-1/2 items-center justify-center text-2xl md:text-6xl text-white">
        <p className="md:text-start text-center">{joinTitle}</p>
      </div>

      <div className="w-full md:w-1/2 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className={`${emailError? "border-red-500" : "border-white"  } w-full md:px-8 px-2 py-2 md:py-4 flex flex-row justify-between items-center border-2 border-white rounded-full px-4ounded-`}
        >
          <div className="w-[65%] md:w-[80%]">
            <TextInputComponent
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
              disabled={false}
              type="email"
              required={true}
              maxLength={250}
              minLength={0}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
          </div>

          <div>
            <ButtonComponent
              isYellow={true}
              isPurple={false}
              type="submit"
              label={joinButtonText}
              disabled={false}
              isLoading={false}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinGymBuddiesComponent;
