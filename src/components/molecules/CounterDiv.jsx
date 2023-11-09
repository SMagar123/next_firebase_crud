import React from "react";

const CounterDiv = ({ title, count, titleColor }) => {
  return (
    <div
      className={`border border-${titleColor} ease-in-out col-span-4 lg:col-span-3 p-4 shadow-sm flex flex-col gap-5 rounded-md cursor-pointer hover:shadow-lg hover:shadow-${titleColor} hover:translate-y-2 transition`}
    >
      <h2 className={`font-bold text-xl text-${titleColor}`}>{title}</h2>
      <h3 className="font-semibold text-3xl">{count}</h3>
    </div>
  );
};

export default CounterDiv;
