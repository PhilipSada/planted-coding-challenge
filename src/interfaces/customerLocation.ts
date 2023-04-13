import { ClosestProject } from "./closestProject";

export interface CustomerLocation {
    name: string;
    latitude: number;
    longitude: number;
    closestProjects?:ClosestProject[];
}