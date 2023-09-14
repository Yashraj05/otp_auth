import express from 'express'
import { signup } from '../controllers/signup.js';

export const userRoutes = express.Router();

userRoutes.use(express.json());

userRoutes.post('/signup',signup);