import { ImageRequest } from "./image-request";

export interface ReviewRequest {
    place: number;
    food: number;
    service: number;
    drinks: number;
    music: number;
    menu: number;
    waitingTime: number;
    comments: string;
    idRestaurant: number;
    idUser: number;
    images: ImageRequest[];
}
