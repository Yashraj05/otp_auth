import { NextFunction, Request, Response } from "express";
import { Otp } from "../models/Otp.js";
import { User } from "../models/User.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import { tokenToString } from "typescript";

dotenv.config({path:"/home/my/Desktop/otp-auth/.env"})

export async function verify(req:Request,res:Response,next:NextFunction) 
{
    const {otp} = req.body;
    const secret = process.env.SECRET_KEY;
    const phoneExist  = await Otp.findOne({otp});

    if(!phoneExist)
    {
        return res.send("Invalid otp");
    }
    console.log(phoneExist);
    

    const user = await User.findById(phoneExist.UserId);
    let token = ''
    if(secret)
    {
         token  = jwt.sign({id:user?._id,name:user?.name},secret);
    }
    res.json({message:"your token ",token})

}