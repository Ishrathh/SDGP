//import { Router } from 'express';
//import { register } from '../controllers/user.js';

const { register, login } = require('../controllers/user.js');
const userRouter = require('express').Router();

userRouter.post('/register', register);
userRouter.post('/login', login);

module.exports = userRouter;