import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config({path:"/home/my/Desktop/otp-auth/.env"});

const uri : String | undefined = process.env.MONGODB_URI
console.log(uri)

export default async function connectDb() 
{
    try {
        if(typeof uri === 'string')
        {
            await mongoose.connect(uri);
        }
        console.log("databse connected")
    } catch (error) {
        console.error("not connected to database")
    }   
}