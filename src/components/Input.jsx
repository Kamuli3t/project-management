import React from "react";

const Input = ({ isTextarea, title, ...props }) => {
  const classes =
    "w-full p-1 rounded-sm border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        className="capitalize text-sm font-bold text-stone-500"
        htmlFor={title}
      >
        {title}
      </label>
      {!isTextarea && <input className={classes} type="text" id={title} />}
      {isTextarea && <textarea className={classes + " h-40"} />}
    </p>
  );
};

export default Input;
