import React from "react";

const ButtonComponent = ({ type, children }) => {
  return (
    <button
      type={type}
      className="w-full px-3 py-4 bg-slate-500 rounded-md font-bold text-white hover:bg-slate-600"
    >
      {children}
    </button>
  );
};

ButtonComponent.defaultProps = {
  type: "button",
};

export default ButtonComponent;
