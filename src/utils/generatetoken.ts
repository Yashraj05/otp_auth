
import { NextFunction, Request, Response } from "express";
import { Otp } from "../models/Otp";

export async function genrateToken(req:Request,res:Response,next:NextFunction) 
{
    const {otp} = req.body;
    
    const phoneExist : typeof Otp | null = await Otp.findOne({otp});

    if(!phoneExist)
    {
        return res.send("Invalid otp");
    }
    next()

}