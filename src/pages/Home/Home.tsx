import React, { useState, useEffect } from 'react';
import customerLocations from '../../data/customerLocations.json';
import plantationProjects from '../../data/plantationProjects.json';
import './Home.scss';
import { CustomerLocation } from '../../interfaces/customerLocation';
import SearchBox from '../../components/SearchBox/SearchBox';
import { ClosestProject } from '../../interfaces/closestProject';
import Locations from '../../components/Locations/Locations';


const Home: React.FC = () => {

    const [data, setData] = useState<CustomerLocation[]>([]);
    const [filteredData, setFilteredData] = useState<CustomerLocation[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);


    /**
       Calculates distance using longitudes and latitudes
    */
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number, unit: string) => {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            let radlat1 = Math.PI * lat1 / 180;
            let radlat2 = Math.PI * lat2 / 180;
            let theta = lon1 - lon2;
            let radtheta = Math.PI * theta / 180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;

            if (unit === "K") { dist = dist * 1.609344 }//convert to km
            if (unit === "N") { dist = dist * 0.8684 } // convert to nautical mile

            return dist;
        }
    }

    /**
       Finds the closest plantation projects based on distance
    */
    const findClosestPlantationProjects = (data: any, n: number) => {
        return data.sort((x: any, y: any) => x.distance - y.distance).slice(0, n);
    }

    /**
       Combines the customer location data together with the three closest plantation
       projects based on distance
    */

    const combineData = () => {

        setIsLoading(true);

        let customerLocationArr: CustomerLocation[] = customerLocations;
        let combinedData: CustomerLocation[] = [];

        for (let i = 0; i < customerLocationArr.length; i++) {
            let arr: ClosestProject[] = [];
            for (let j = 0; j < plantationProjects.length; j++) {
                let distance = calculateDistance(
                    Number(customerLocationArr[i].latitude),
                    Number(customerLocationArr[i].longitude),
                    Number(plantationProjects[j].latitude),
                    Number(plantationProjects[j].longitude),
                    "K",
                );
                arr.push({ name: plantationProjects[j].projectName, distance });
            }

            //find the 3 closest plantation projects 
            let closestProjects = findClosestPlantationProjects(arr, 3);


            customerLocationArr[i]["closestProjects"] = closestProjects;
            combinedData.push(customerLocationArr[i])
        }
        setData(combinedData);
        setFilteredData(combinedData);

        setIsLoading(false);
    };

 
    useEffect(() => {
        combineData();
    }, []);

    if (isLoading) {
        return (
            <div className="home">
                <div className="home__container">
                   <p>Please wait ...</p>
                </div>
            </div> 
        )
    }

    return (
        <div className="home">
            <div className="home__container">
                <h4 className="home__title">Coding Challenge</h4>
                <p className="home__desc">Below are the customer locations and the three closest plantation projects in each location</p>
                <SearchBox data={data} setFilteredData={setFilteredData}/>
                <Locations filteredData={filteredData}/>
            </div>
        </div>
    );
}

export default Home;