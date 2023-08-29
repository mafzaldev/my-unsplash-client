import React from "react";

function InputField({
  type,
  name,
  placeholder,
  value,
  onChange,
  children,
  label,
  paddingX,
  paddingY,
}) {
  const styles = {
    paddingLeft: paddingX,
    paddingRight: paddingX,
    paddingTop: paddingY,
    paddingBottom: paddingY,
  };

  return (
    <div>
      {label && (
        <label htmlFor={name} className="text-xs text-[#4F4F4F]">
          {label}
        </label>
      )}
      <div
        style={styles}
        className={`flex gap-2 font-medium text-sm text-[#000000] border-[1px] border-solid rounded-xl`}
      >
        {children}
        <input
          className="border-none outline-none text-left text-ellipsis w-full"
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default InputField;
