import { IUser } from "./iuser.interface";



export interface IUserService{
    listAllUsers:()=>IUser[] | [] | {},
    findUserId:(id:number)=>IUser | {},
    registerUser:(data:Omit<IUser,"id">)=>IUser | {},
    sigIn:(data:{email:string,password:string})=>IUser | {},
    updateUserBydId:(id:number,_data:Omit<IUser,"id">)=>IUser | {},
    deleteUserId:(id:number)=> {},


}