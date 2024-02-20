import React, { forwardRef } from "react";

const Input = forwardRef(({ isTextarea, title, ...props }, ref) => {
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
      {!isTextarea && (
        <input
          ref={ref}
          className={classes}
          type="text"
          id={title}
          {...props}
        />
      )}
      {isTextarea && (
        <textarea ref={ref} className={classes + " h-40"} {...props} />
      )}
    </p>
  );
});

export default Input;
