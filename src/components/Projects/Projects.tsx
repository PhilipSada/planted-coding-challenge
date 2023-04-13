import React from 'react';
import './Projects.scss';
import { ClosestProject } from '../../interfaces/closestProject';
import ProjectCard from '../ProjectCard/ProjectCard';


interface ProjectsProps {
    closestProjects?: ClosestProject[];
}
const Projects: React.FC<ProjectsProps> = ({ closestProjects }) => {
    return (
        <div className="projects" data-testid="projects">
            {
                closestProjects?.map((project, index) => (
                    <div key={index} data-testid="project">
                        <ProjectCard name={project.name} distance={project.distance} />
                    </div>
                ))
            }
        </div>
    );
}

export default Projects;