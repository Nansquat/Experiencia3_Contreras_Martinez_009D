export interface Users {
    id:number;
    username:string;
    password:string;
    correo:string;
    fechanac:string;
    isactive:boolean;
}
export interface newUsuario {
    username:string;
    password:string;
    correo:string;
    fechanac:string;
    isactive:boolean;
}
export interface UserQR {
    id:number;
    username:string;
    password:string;
    correo:string;
    fechanac:string;
    qrdata:string;
    isactive:boolean;
}