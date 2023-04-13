import React from 'react';
import './ProjectCard.scss';
import projectImg from '../../assets/images/plantation-project.jpg'

interface ProjectCardProps {
    name: string;
    distance: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, distance }) => {
    return (
        <div className="project-card">
            <div className="project-card__container">
                <div className="project-card__img-container"><img src={projectImg} alt="plantation-project" /></div>
                <div className="project-card__desc">
                    <h5>{name}</h5>
                    <p>{distance.toFixed(2)} km</p>
                </div>
            </div>

        </div>
    );
}

export default ProjectCard;