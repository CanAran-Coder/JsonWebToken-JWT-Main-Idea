import express from "express";
import loginRoute from "./routes/loginRoute.js"
import cors from "cors"

const app = express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



app.use("/login",loginRoute)





app.listen(3000)