import { ButtonProps } from "@/types";

const ButtonComponent = ({
  label,
  onClick,
  disabled,
  type,
  icon,
  iconPosition,
  isLoading,
  isYellow,
  isPurple,
}: ButtonProps) => {
  const buttonClass = () => {
    let baseClass = "w-full text-sm py-2 md:py-3 px-4 lg:px-6 rounded-full items-center justify-center ";

    if (isPurple) {
      baseClass += "bg-purple-500 text-white hover:bg-purple-600";
    } else if (isYellow) {
      baseClass += "bg-yellow-400 text-black hover:bg-yellow-500";
    } else {
      baseClass += "bg-white text-black hover:bg-black hover:text-white";
    }

    baseClass += iconPosition === "left" ? " flex items-center gap-2" : " flex justify-center items-center gap-2";

    baseClass += disabled ? " opacity-50 cursor-not-allowed" : " opacity-100 cursor-pointer";

    return baseClass;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={buttonClass()}
    >
      {label ? (
        <span>{label}</span>
      ) : (
        isLoading && <span className="text-black">Loading...</span>
      )}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default ButtonComponent;
