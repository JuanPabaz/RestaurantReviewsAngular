export interface User {
    idUser: number;
    nombreCompleto: string;
    username: string;
    password: string;
    role: Role;
}

export enum Role {
    NONE = 'NONE',
    CLIENTE = 'CLIENTE',
    ADMIN = 'ADMIN',
    SUPERVISOR = 'SUPERVISOR'
}
