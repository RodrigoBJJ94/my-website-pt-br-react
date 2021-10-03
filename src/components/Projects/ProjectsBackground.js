import React from 'react';
import { default as ProjectsSvg } from '../../assets/img/ProjectsSvg.svg';

export default function ProjectsBackground() {
    return (
        <div className="projects-background-svg" >
            <img src={ProjectsSvg} alt="" className="projects-background-svg" />
        </div>
    );
};
