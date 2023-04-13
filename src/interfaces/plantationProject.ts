export interface PlantationProject {
    id: number;
    type: string;
    projectName: string;
    status: string;
    forestOwnership: string;
    forestOwner: string;
    treeQuantity: number,
    location: string;
    coordinatesUrl: string;
    latitude: string;
    longitude: string;
    startId: number,
    endId: number,
    startDate: string;
    comment: string;
    area: string;
}