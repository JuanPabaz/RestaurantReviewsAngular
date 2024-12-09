import { Role } from "./user.models";

export interface RegisterRequestDTO {
    nombreCompleto: string;
    username: string;
    password: string;
    role: Role;
}
