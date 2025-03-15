import {Router} from "express"
import { NoteController } from "../controllers/note.controller"

const routes=Router()
routes.post("/notes",NoteController.createNote)
routes.get("/notes",NoteController.getAllNotes)
routes.get("/users/:id/notes",NoteController.getNoteAllFromUser)
routes.get("/notes/:id",NoteController.getNoteById)
routes.put("/notes/:id",NoteController.updateNote)
routes.delete("/notes",NoteController.deleteNote)


export default routes