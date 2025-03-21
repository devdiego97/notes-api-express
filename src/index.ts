import express from "express"
import dotenv from "dotenv"
import routes from "./routes"

dotenv.config()

const api=express()
api.use(express.json())
api.use(routes)
api.listen(process.env.PORT,()=>console.log(`server run : http://localhost:${process.env.PORT}`))