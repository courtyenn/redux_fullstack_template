/**
 * Mongoose Models and Schema Declaration File
 */
import mongoose from 'mongoose';

import {Task, TaskSchema} from './Task';

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    todoList: [TaskSchema]
});

// let userSchema = mongoose.Schema({
//     name: String,
//     email: String,
//     friendList: [{type: String}] // would store all of your  user Id. Not an ObjectId reference, a SIMPLE string, that is your friends'id
// });


export default mongoose.model('User', userSchema);