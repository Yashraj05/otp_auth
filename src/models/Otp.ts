import mongoose from "mongoose";

interface otp{
    UserId : mongoose.Schema.Types.ObjectId;
    otp:string
}

const otpSchema = new mongoose.Schema<otp>({
    UserId:{
        required:true,
        type :mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    otp:{
        required:true,
        type:String
    }
},{ timestamps: true })

export const Otp = mongoose.model<otp>("otp",otpSchema); 