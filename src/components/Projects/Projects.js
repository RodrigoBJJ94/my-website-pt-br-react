import React from "react";
import ProjectsTitles from "./ProjectsTitles";
import ProjectsMain from "./ProjectsMain";
import ProjectsBackground from "./ProjectsBackground";
import "./Projects.css";

export default function Projects({ language }) {
  return (
    <section
      id="projects"
      className="grid-one main-background section">
      <div className="main-content grid-one-content projects-white">
        <div className="intro-text-content">
          <ProjectsTitles
            language={language}
          />
          <ProjectsMain
            language={language}
          />
        </div>
        <ProjectsBackground />
      </div>
    </section>
  );
};
