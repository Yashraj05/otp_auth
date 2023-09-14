import mongoose from "mongoose";

interface User{
    name:string,
    phoneNo:string
}

const userSchema = new mongoose.Schema<User>({
    name:{
        type : String,
        required:true
    },
    phoneNo:{
        type:String,
        required :true
    }
   
}, { timestamps: true })

export const User = mongoose.model<User>('users',userSchema);