import React from "react";

const InputWrapper = ({ children, required, label }) => {
  return (
    <div className="book-form-item">
      <h3 className={required && "required"}>{label}</h3>
      <div className="mt-[10px]">{children}</div>
    </div>
  );
};

export default InputWrapper;
