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
exports.genrateToken = void 0;
const Otp_1 = require("../models/Otp");
function genrateToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { otp } = req.body;
        const phoneExist = yield Otp_1.Otp.findOne({ otp });
        if (!phoneExist) {
            return res.send("Invalid otp");
        }
        next();
    });
}
exports.genrateToken = genrateToken;
