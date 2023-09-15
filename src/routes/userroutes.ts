import express from 'express'
import { signup } from '../controllers/signup.js';
import { verify } from '../controllers/verify.js';

export const userRoutes = express.Router();

userRoutes.use(express.json());

userRoutes.post('/signup',signup);
userRoutes.post("/verify",verify)