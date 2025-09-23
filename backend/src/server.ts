import express from "express";
import loginRoute from "./routes/loginRoute.js"


const app = express();




app.use("/login",loginRoute)





app.listen(3000)