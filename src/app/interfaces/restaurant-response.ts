import { ImageResponse } from "./image-response";

export interface RestaurantResponse {
    idRestaurant: number;
    restuarantName: string;
    address: string;
    phoneNumber: string;
    idCategory: number;
    pageLink: string;
    images: ImageResponse[];
}
