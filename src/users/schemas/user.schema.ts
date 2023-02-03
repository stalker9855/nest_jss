import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username:{type:String, required:true},
  password:{type:String, required:true},
  fullname: {type:String, required:true},
  age:{type:Number, required:true},
});