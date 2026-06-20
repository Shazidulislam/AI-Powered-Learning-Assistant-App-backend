// import dotenv from "dotenv"
// dotenv.config()

// import express from "express";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";
// import { error } from "console";


// // Es module __dirnme alternative
// const __filename = fileURLToPath(import.meta.url);
// const __dirnme = path.dirname(__filename);  

// //initilize express app
// const app = express();

// //Connect to Mongodb
// connectDB();

// //Middleware to handle CORS
// app.use(
//     cors({
//         origin:"*",
//         methods:["GET" , "POST" , "PUT" , "DELETE"],
//         allowedHeaders:["Content-Type" , "Authorization"],
//     })
// );

// app.use(express.json()); // JSON data (API)
// app.use(express.urlencoded({extended:true}));  // handel from data 


// //Satic folder for uploads 
// app.use("/uploads" , express.static(path.join(__dirnme , "uploads"))); // Uploads folder publicly accessible করা।

// //routes

// //404 handeler 
// app.use((req , res)=>{
//     res.send(404).json({
//         success:false,
//         error:"Route not found",
//         statusCode:404
//     });
// });

// // Start serrver
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, ()=>{
//     console.log(`Server runing in ${process.env.NODE_ENV} NODE ON port ${PORT}`)
// })

// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import dns from "dns";

// dotenv.config();
// dns.setDefaultResultOrder("ipv4first");

// console.log("URI:", process.env.MONGODB_URI);

// try {
//   await mongoose.connect(process.env.MONGODB_URI);
//   console.log("✅ Connected!");
// } catch (e) {
//   console.error("❌ Full Error:", e);
}