"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const User_js_1 = require("../models/User.js");
const generateotp_js_1 = require("../utils/generateotp.js");
const Otp_js_1 = require("../models/Otp.js");
const sendotp_js_1 = require("../utils/sendotp.js");
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("runn");
        try {
            const { name, phoneNo } = req.body;
            const phoneExist = yield User_js_1.User.findOne({ phoneNo });
            if (phoneExist) {
                return res.status(400).json({ message: "Phone number already exists" });
            }
            const newUser = new User_js_1.User({
                name,
                phoneNo,
            });
            const user = yield newUser.save();
            const otp = (0, generateotp_js_1.generateOtp)();
            const userOtp = new Otp_js_1.Otp({
                UserId: user._id,
                otp: otp,
            });
            yield userOtp.save();
            (0, sendotp_js_1.sendOtp)(otp, user.phoneNo);
            res.status(200).json({ message: "OTP sent successfully" });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    });
}
exports.signup = signup;
