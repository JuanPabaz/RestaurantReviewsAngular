export interface User {
    idUser: number;
    nombreCompleto: string;
    username: string;
    password: string;
    role: Role;
}

export enum Role {
    CLIENTE = 'CLIENTE',
    ADMIN = 'ADMIN',
    SUPERVISOR = 'SUPERVISOR'
}
