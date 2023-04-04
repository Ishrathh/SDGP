import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{type:String, min:2, max:50, required:true},
    email:{type:String, min:5, max:50, required:true, unique:true},
    password:{type:String, required:true},
    addictionLevel:{type:String, default:''},
    photoURL:{type:String, default:''}
})

module.exports = mongoose.model('user', userSchema);
export default User;
