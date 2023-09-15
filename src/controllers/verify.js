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
exports.verify = void 0;
const Otp_js_1 = require("../models/Otp.js");
const User_js_1 = require("../models/User.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "/home/my/Desktop/otp-auth/.env" });
function verify(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { otp } = req.body;
        const secret = process.env.SECRET_KEY;
        const phoneExist = yield Otp_js_1.Otp.findOne({ otp });
        if (!phoneExist) {
            return res.send("Invalid otp");
        }
        console.log(phoneExist);
        const user = yield User_js_1.User.findById(phoneExist.UserId);
        let token = '';
        if (secret) {
            token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user._id, name: user === null || user === void 0 ? void 0 : user.name }, secret);
        }
        res.json({ message: "your token ", token });
    });
}
exports.verify = verify;
