import { ImageResponseDTO } from "./image-response-dto.models";

export interface RestaurantResponseDTO {
    idRestaurant: number;
    restuarantName: string;
    address: string;
    pageLink: string;
    phoneNumber: string;
    idCategory: number;
    images:ImageResponseDTO[]
}
