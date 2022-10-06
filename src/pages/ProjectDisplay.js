import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="demo">
        <a href={project.demo} target="#blank">
          <p>Demo</p>
        </a>
        <p>Get the source code</p>
        <a href={project.link} target="#blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
