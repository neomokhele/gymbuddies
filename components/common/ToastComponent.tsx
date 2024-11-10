import { ToastProps } from "@/types";

const ToastComponent = ({ message, type }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white font-semibold ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
      style={{
        transition: "opacity 0.5s ease-in-out",
        animation: "fadeIn 1s, fadeOut 4s 3s forwards",
      }}
    >
      {message}
    </div>
  );
};

export default ToastComponent;
