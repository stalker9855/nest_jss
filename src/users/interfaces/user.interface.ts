import { Document } from 'mongoose';

export interface User extends Document {
    username: String,
    password:Number,
    fullname: String,
    age: Number,
}