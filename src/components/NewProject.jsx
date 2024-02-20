import React, { useRef } from "react";
import Input from "./Input";

const NewProject = ({ onAdd }) => {
  const titleRef = useRef();
  const descrRef = useRef();
  const dueDRef = useRef();

  function handleSave() {
    onAdd({
      title: titleRef.current.value,
      description: descrRef.current.value,
      dueDate: dueDRef.current.value,
      key: Math.floor(Math.random() * 100),
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="px-5 py-2 rounded-md text-stone-800 hover:text-stone-950 bg-stone-200">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <Input ref={titleRef} isTextarea={false} title="title" />
      <Input ref={descrRef} isTextarea={true} title="description" />
      <Input type="date" ref={dueDRef} isTextarea={false} title="due Date" />
    </div>
  );
};

export default NewProject;
