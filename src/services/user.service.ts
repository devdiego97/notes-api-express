import { IUser } from "../interfaces/iuser.interface";
import { IUserService } from "../interfaces/iusers.interface";


export const UserService:IUserService={
    listAllUsers: function (): IUser[] | [] | {} {
        throw new Error("Function not implemented.");
    },
    findUserId: function (id: number): IUser | {} {
        throw new Error("Function not implemented.");
    },
    registerUser: function (data: Omit<IUser, "id">): IUser | {} {
        throw new Error("Function not implemented.");
    },
    updateUserBydId: function (id: number, data: Omit<IUser, "id">): IUser | {} {
        throw new Error("Function not implemented.");
    },
    deleteUserId: function (id: number): {} {
        throw new Error("Function not implemented.");
    },
    sigIn: function (data: { email: string; password: string; }): IUser | {} {
        throw new Error("Function not implemented.");
    }
}