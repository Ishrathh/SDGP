import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import tryCatch from './utils/tryCatch.js'


export const register = tryCatch( async(req, res)=>{

        const { email, password} = req.body
        if(password.length < 6) return res.status(400).json({success:false, message:'Password must be 6 characters or more'})
        const emailLowerCase = email.toLowerCase()
        const existedUser = await User.findOne({email:emailLowerCase})
        if(existedUser) return res.status(400).json({success:false, message:'User already exists!'})
        const hashedPassword = await bcrypt.compare(password, existedUser.password)
        if(!correctPassword)return res.status(400).json({success:false,message:'Invalid credentials'})
       
        const {_id:id , name , photoURL} = existedUser
        const token = jwt.sign({id, name, photoURL}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.status(201).json({success:true, result:{id, name, email:emailLowerCase, photoURL, token}})

    
})


