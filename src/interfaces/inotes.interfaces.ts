import { INote } from './inote.interface';


export interface INotesService{
    listAllNotes:()=>Promise<INote[] | {} | []>,
    findNoteId:(id:number)=>{},
    addNote:(date:Omit<INote,"id">)=>INote | {},
    updateFindId:(id:number,data:Omit<INote,"id">)=>{},
    deleteFindId:(id:number)=>{}
}