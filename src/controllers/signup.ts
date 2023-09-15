import { Request, Response } from 'express';
import { User } from '../models/User.js';
import { generateOtp } from '../utils/generateotp.js';
import { Otp } from '../models/Otp.js';
import { sendOtp } from '../utils/sendotp.js';

export async function signup(req: Request, res: Response) {
    console.log("runn")
  try {
    const { name, phoneNo } = req.body;
    

    const phoneExist  = await User.findOne({ phoneNo });

    if (phoneExist) {
      return res.status(400).json({ message: "Phone number already exists" });
    }

    const newUser = new User({
      name,
      phoneNo,
    });

    const user = await newUser.save();

    const otp: string = generateOtp();

    const userOtp = new Otp({
      UserId: user._id,
      otp: otp,
    });

    await userOtp.save();

    sendOtp(otp, user.phoneNo);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
