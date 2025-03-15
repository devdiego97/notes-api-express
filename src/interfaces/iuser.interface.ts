import { INote } from "./inote.interface";



export interface IUser{
    idd:number,
    name:string,
    email:string,
    password:string,
    notes?:INote[]
}