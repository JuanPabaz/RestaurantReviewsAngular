import { Role } from "./user.models";

export interface AuthResponseDTO {
    accessToken: string;
    refreshToken: string;
    role: Role
}
