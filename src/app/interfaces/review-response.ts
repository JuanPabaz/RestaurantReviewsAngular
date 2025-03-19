import { ImageResponse } from "./image-response";

export interface ReviewResponse {
    idReview: number;
    place: number;
    food: number;
    service: number;
    drinks: number;
    music: number;
    menu: number
    waitingTime: number;
    ambient: number;
    totalScore: number;
    comments: string;
    idRestaurant: number;
    idUser: number;
    images: ImageResponse[];
}
