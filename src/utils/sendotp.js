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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOtp = void 0;
const twilio_1 = __importDefault(require("twilio"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "/home/my/Desktop/otp-auth/.env" });
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = (0, twilio_1.default)(accountSid, authToken);
const sid = process.env.TWILIO_SERVICE_SID;
function sendOtp(otp, phoneNo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield twilioClient.messages.create({
                body: `Your Otp is ${otp}`,
                from: '+16304134980',
                to: phoneNo
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.sendOtp = sendOtp;
