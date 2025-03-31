import { CategoryResponse } from "./category-response";
import { ImageResponse } from "./image-response";

export interface RestaurantResponse {
    idRestaurant: number;
    restuarantName: string;
    address: string;
    phoneNumber: string;
    restuarantDescription: string;
    avgRating: number;
    category: CategoryResponse;
    pageLink: string;
    avgPrice: number;
    images: ImageResponse[];
}
