"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otp = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const otpSchema = new mongoose_1.default.Schema({
    UserId: {
        required: true,
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    },
    otp: {
        required: true,
        type: String
    }
}, { timestamps: true });
exports.Otp = mongoose_1.default.model("otp", otpSchema);
