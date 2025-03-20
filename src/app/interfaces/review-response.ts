import { ImageResponse } from "./image-response";
import { RestaurantResponse } from "./restaurant-response";

export interface ReviewResponse {
    idReview: number;
    title: string;
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
    restaurant: RestaurantResponse;
    idUser: number;
    images: ImageResponse[];
}
