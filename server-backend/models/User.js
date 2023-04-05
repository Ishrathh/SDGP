//import mongoose from "mongoose";
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String, min:2, max:50, required:true},
    email:{type:String, min:5, max:50, required:true, unique:true},
    password:{type:String, required:true},
    addictionLevel:{type:String, default:''},
    weeklyTime:{type:Int32Array, default:0},
    photoURL:{type:String, default:''}
})

module.exports = mongoose.model('User', userSchema);
//export default User;