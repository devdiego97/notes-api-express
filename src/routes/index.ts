import {Router} from "express"
import { NoteController } from "../controllers/note.controller"
import { UserController } from "../controllers/user.controller"

const routes=Router()
routes.post("/notes",NoteController.createNote)
routes.get("/notes",NoteController.getAllNotes)
routes.get("/users/:id/notes",NoteController.getNoteAllFromUser)
routes.get("/notes/:id",NoteController.getNoteById)
routes.put("/notes/:id",NoteController.updateNote)
routes.delete("/notes/:id",NoteController.deleteNote)

routes.post("/auth/register",UserController.registerUser)
routes.post("/auth/sigIn",UserController.registerUser)
routes.get("/users",UserController.getAllUsers)
routes.get("/notes/:id/users",UserController.getNotesFromUser)
routes.get("/users/:id",UserController.getUseryId)
routes.put("/users/:id",UserController.updateUser)
routes.delete("/users/:id",UserController.deleteUser)


export default routes