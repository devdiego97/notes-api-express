import { INote } from '../interfaces/inote.interface';
import { INotesService } from './../interfaces/inotes.interfaces';



export const NoteService:INotesService={
    listAllNotes: function (): Promise<INote[] | {} | []> {
        throw new Error('Function not implemented.');
    },
    findNoteId: function (id: number): {} {
        throw new Error('Function not implemented.');
    },
    addNote: function (date: Omit<INote, 'id'>): INote | {} {
        throw new Error('Function not implemented.');
    },
    updateFindId: function (id: number, data: Omit<INote, 'id'>): {} {
        throw new Error('Function not implemented.');
    },
    deleteFindId: function (id: number): {} {
        throw new Error('Function not implemented.');
    }
}