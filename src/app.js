"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_js_1 = __importDefault(require("./config/mongoose.js"));
const userroutes_js_1 = require("./routes/userroutes.js");
dotenv_1.default.config({ path: "/home/my/Desktop/otp-auth/.env" });
const port = process.env.PORT;
console.log(port);
const app = (0, express_1.default)();
(0, mongoose_js_1.default)();
app.use(express_1.default.json());
app.use('/', userroutes_js_1.userRoutes);
console.log('runs');
app.listen(8080, () => {
    console.log("server running http://localhost:8080/", port);
});
