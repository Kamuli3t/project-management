import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleOnAdd(projectData) {
    setProjectsState((prevState) => {
      const updatedProjects = [...prevState.projects, projectData];
      console.log(updatedProjects);
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />

      {projectsState.selectedProjectId === undefined ? (
        <NoProjectSelected onStartAddProject={handleStartAddProject} />
      ) : projectsState.selectedProjectId === null ? (
        <NewProject onAdd={handleOnAdd} />
      ) : null}
    </main>
  );
}

export default App;
