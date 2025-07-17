import mongoose from"mongoose"
import {DB_NAME} from "./constants.js" 
import connectDB from "./db/index.js"
//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
dotenv.config({ path: './.env' });


import express from"express"
const app=express();

console.log("🌐 .env loaded ->", process.env.MONGODB_URL);

connectDB()
 



// function connectDB(){}//declaration of function for connection 
// connectDB()  //then we will call the function

// ;(async ()=>{
//     try{
// await mongoose.connect(`${process.env.MONGODB_url}?${`DB_NAME`}`)
// app.on("error",(error)=>{console.log(error);throw error})//listeners

// app.listen(process.env.port,()=>{console.log{`port:${process.env.port}`}})
//     }
//     catch(error){
//         console.error("error:",error)
//         throw err
//     }
// })()//iffy declaration and calling simulataneosly


