import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/mongoose.js';
import { userRoutes } from './routes/userroutes.js';

dotenv.config({path:"/home/my/Desktop/otp-auth/.env"});

const port : string | undefined = process.env.PORT
console.log(port)

const app = express();

connectDb()

app.use(express.json());

app.use('/',userRoutes);
console.log('runs')

app.listen(8080,()=>{
    console.log("server running http://localhost:8080/", port);
})

