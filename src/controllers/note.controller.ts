import {Request,Response} from "express"

export const NoteController={
  

    getAllNotes:async(req:Request,res:Response)=>{
        try{
           res.status(200).json("tudo certo")
        }catch(e){

        }
    },
    getNoteAllFromUser:async(req:Request,res:Response)=>{
        try{

        }catch(e){

        }
    },
   
    getNoteById:async(req:Request,res:Response)=>{
        try{

        }catch(e){

        }
    },
    
    createNote:async(req:Request,res:Response)=>{
        try{

        }catch(e){

        }
    },
    
   updateNote:async(req:Request,res:Response)=>{
        try{

        }catch(e){

        }
    },
    
    deleteNote:async(req:Request,res:Response)=>{
        try{

        }catch(e){

        }
    }

}