import React from 'react';
import './Location.scss';
import { ClosestProject } from '../../interfaces/closestProject';
import {MdLocationPin} from 'react-icons/md';
import Projects from '../Projects/Projects';

interface LocationProps {
    name: string;
    closestProjects?: ClosestProject[];
}
const Location: React.FC<LocationProps> = ({ name, closestProjects}) => {
    return (
        <div className="location">
            <h5 className="location__title"><span><MdLocationPin/></span>{name}</h5>
            <Projects closestProjects={closestProjects}/>
        </div>
    );
}

export default Location;