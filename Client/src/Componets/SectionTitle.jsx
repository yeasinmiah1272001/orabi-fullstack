import React from "react";

const SectionTitle = ({ title, subtitle, center }) => {
  return (
    <div className={`my-8 ${center ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-lg text-gray-500 mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
