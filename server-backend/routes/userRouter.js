import {Router} from 'express';
import { register } from '../controllers/user.js';


const userRouter = Router();
userRouter.post('/register', register);
userRouter.post('/login', login);


const register = require('../controllers/user.js');
const router = require('express').Router();

router.post('/', register)

module.exports = router;