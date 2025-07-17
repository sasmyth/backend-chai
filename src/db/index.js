import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB=async ()=> {
    try{console.log("🔍 MONGODB_URL from .env =", process.env.MONGODB_URL);

        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/`)
console.log(`MongoDB connected:${connectionInstance.connection.host}`)}
    catch(error){
        console.log("MONGODB ka error:",error);
        process.exit(1)
    }
}
export default connectDB;