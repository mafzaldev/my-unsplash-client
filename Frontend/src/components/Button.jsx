import React from "react";

function Button({ backgroundColor, children }) {
  return (
    <button
      className={`bg-[${backgroundColor}] text-[#FFFFFF] rounded-xl py-2 px-4 shadow-[0_1px_6px_0px_rgba(0,0,0,0.1)] transition-all hover:opacity-70`}
    >
      {children}
    </button>
  );
}

export default Button;
