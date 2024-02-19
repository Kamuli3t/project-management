import React from "react";
import Botton from "./Botton";

const ProjectsSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 uppercase text-stone-200 font-bold md:text-xl">
        Your Projects
      </h2>
      <div>
        <Botton>+ Add Project</Botton>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectsSidebar;
