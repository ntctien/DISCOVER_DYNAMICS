import React from "react";

const InputWrapper = ({ children, required, label, fontSize }) => {
  return (
    <div className="book-form-item" style={{ fontSize: fontSize ?? 18 }}>
      <h3 className={required && "required"}>{label}</h3>
      <div className="mt-[10px]">{children}</div>
    </div>
  );
};

export default InputWrapper;
