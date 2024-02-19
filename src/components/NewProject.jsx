import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="px-5 py-2 rounded-md text-stone-800 hover:text-stone-950 bg-stone-200">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <Input isTextarea={false} title="title" />
      <Input isTextarea={true} title="description" />
      <Input isTextarea={false} title="due Date" />
    </div>
  );
};

export default NewProject;
