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

export default mongoose.model('User', userSchema);