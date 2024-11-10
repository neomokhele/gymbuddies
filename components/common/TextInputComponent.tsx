import { TextInputProps } from "@/types";

const TextInputComponent = ({
  placeholder,
  value,
  onChange,
  onBlur,
  disabled,
  type,
  required,
  maxLength,
  minLength,
  pattern,
}: TextInputProps) => {
  return (
    <div className="w-full">
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        className="w-full py-2 px-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent text-white md:text-sm text-xs placeholder:text-white"
      />
    </div>
  );
};

export default TextInputComponent;
