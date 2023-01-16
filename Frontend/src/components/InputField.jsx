import React from "react";

function InputField({ type, placeholder, children }) {
  return (
    <div className="flex gap-2 font-medium text-sm text-[#BDBDBD] border-[1px] border-solid rounded-xl py-3 px-4">
      {children}
      <input
        className="border-none outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
