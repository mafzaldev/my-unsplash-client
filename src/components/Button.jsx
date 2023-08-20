import React from "react";

function Button({
  type,
  classNames,
  backgroundColor,
  textColor,
  children,
  onClick,
  padding,
}) {
  const styles = {
    backgroundColor: backgroundColor,
    color: textColor,
    paddingLeft: `${padding}px`,
    paddingRight: `${padding}px`,
    paddingTop: `${padding / 2}px`,
    paddingBottom: `${padding / 2}px`,
  };
  return (
    <button
      type={type}
      className={`text-[#FFFFFF] text-xs md:text-md lg:text-md rounded-xl border-none outline-none cursor-pointer shadow-[0_1px_6px_0px_rgba(0,0,0,0.1)] transition-all hover:opacity-70 ${classNames}`}
      style={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
