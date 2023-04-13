import React from 'react';
import './Locations.scss';
import Location from '../Location/Location';
import { CustomerLocation } from '../../interfaces/customerLocation';

interface LocationsProps {
    filteredData: CustomerLocation[];
}
const Locations: React.FC<LocationsProps> = ({ filteredData }) => {
    return (
        <div className="locations" data-testid="locations">
            {
                filteredData.length > 0 ? <>

                    {
                        filteredData.map((elem, index) => (
                            <div key={index} className="locations__container">
                                <Location name={elem.name} closestProjects={elem.closestProjects}/>
                            </div>
                        ))
                    }

                </> : <><p>No location found...</p></>
            }

        </div>
    );
}

export default Locations;