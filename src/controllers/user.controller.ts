import { Request,Response } from "express"

export const UserController={
    
        getAllUsers:async(req:Request,res:Response)=>{
            try{
               res.status(200).json("tudo certo")
            }catch(e){
    
            }
        },
        getNotesFromUser:async(req:Request,res:Response)=>{
            try{
    
            }catch(e){
    
            }
        },
       
        getUseryId:async(req:Request,res:Response)=>{
            try{
    
            }catch(e){
    
            }
        },
        signIn:async(req:Request,res:Response)=>{
            try{
    
            }catch(e){
    
            }
        },
        
        registerUser:async(req:Request,res:Response)=>{
            try{
    
            }catch(e){
    
            }
        },
        
       updateUser:async(req:Request,res:Response)=>{
            try{
    
            }catch(e){
    
            }
        },
        
        deleteUser:async(req:Request,res:Response)=>{
            try{
    
            }catch(e){
    
            }
        }
    
}