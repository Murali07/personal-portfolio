import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, key) => {
          return <ProjectItem id={key} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
