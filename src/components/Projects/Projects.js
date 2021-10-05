import React from 'react';
import './Projects.css';
import ProjectsTitles from './ProjectsTitles';
import ProjectsMain from './ProjectsMain';
import ProjectsBackground from './ProjectsBackground';

export default function Projects() {
    return (
        <section id="projects" className="grid-one main-background section">
            <div className="main-content grid-one-content projects-white">
                <div className="intro-text-content">
                    <ProjectsTitles />
                    <ProjectsMain />
                </div>
                <ProjectsBackground />
            </div>
        </section>
    );
};
