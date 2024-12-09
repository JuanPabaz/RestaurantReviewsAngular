import { Role } from "./user.models";

export interface UserResponseDTO {
    idUser: number;
    fullName: string;
    role: Role;
    username:string;
}
