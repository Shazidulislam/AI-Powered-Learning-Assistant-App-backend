import dotenv from "dotenv";
dotenv.config()

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDb from "./config/db.js"
import errorHandler from "./middleware/errorHandler.js"
import authRoutes from "./routes/authRoutes.js"
// Es module __dirnme alternative
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// initilize express app
const app = express();


//connect to mongoDb
connectDb();

// Middleware to handle cors , 
app.use(
    cors({
        origin:"*",
        methods:[ "GET" ,"POST" ,"PUT" , "DELETE"],
        allowedHeaders:["Content-Type" , "Authorization"],
    })
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Satic folder for uploads 
app.use("/uploads" , express.static(path.join(__dirname , "uploads"))); // Uploads folder publicly accessible করা।

//routes
app.use("/api/auth" , authRoutes)

app.use(errorHandler)

//404 handeler 
app.use((req , res)=>{
    res.send(404).json({
        success:false,
        error:"Route not found",
        statusCode:404
    });
});

// Start serrver
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server runing in ${process.env.NODE_ENV} NODE ON port ${PORT}`)
})

// 
process.on("unhandleRejection" , (err)=>{
    console.error(`Error : ${err.message}`);
    process.exit(1);
});
