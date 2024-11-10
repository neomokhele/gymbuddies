"use client";

import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { joinButtonText, joinTitle } from "@/constants/string";
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from "../common/TextInputComponent";
import ToastComponent from "../common/ToastComponent";

const JoinGymBuddiesComponent = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    console.log("Form submitted");

    setTimeout(() => {
      if (email && !emailError) {
        setToastMessage("Form submitted successfully!");
        setShowToast(true);
      } else {
        setToastMessage("There was an error. Please try again.");
        setShowToast(true);
      }

      setEmail("");
      setEmailError("");
      setIsLoading(false);

      setTimeout(() => setShowToast(false), 5000);
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
    <div className="flex flex-col md:flex-row px-10 md:px-32 lg:px-36 py-8 items-center w-full bg-purple-500 gap-6 md:gap-8">
      <div className="w-full md:w-1/2 items-center justify-center text-2xl md:text-4xl lg:text-6xl text-white">
        <p className="md:text-start text-center">{joinTitle}</p>
      </div>

      <div className="w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className={`${
            emailError ? "border-red-500" : "border-white"
          } w-full px-2 py-2 flex flex-row justify-between items-center border-2 rounded-full`}
        >
          <div className="w-[65%] md:w-[70%]">
            <TextInputComponent
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
              disabled={isLoading}
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
              label={isLoading ? "Submitting..." : joinButtonText}
              disabled={isLoading}
              isLoading={isLoading}
              iconPosition="right"
              icon={
                isLoading ? (
                  <AiOutlineLoading3Quarters
                    className="animate-spin"
                    size={20}
                  />
                ) : null
              }
            />
          </div>
        </form>
      </div>

      {showToast && (
        <ToastComponent
          message={toastMessage}
          type={toastMessage.includes("success") ? "success" : "error"}
        />
      )}
    </div>
  );
};

export default JoinGymBuddiesComponent;
