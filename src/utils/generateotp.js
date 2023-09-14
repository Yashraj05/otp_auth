"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = void 0;
const generateOtp = () => {
    const otpLength = 6;
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
};
exports.generateOtp = generateOtp;
