import React from "react";

const Title = ({ text, className }) => {
  return (
    <div className={className}>
      <h2 className="font-medium text-40 text-blue">{text}</h2>
      <div className="h-[3px] bg-black"></div>
    </div>
  );
};

export default Title;
