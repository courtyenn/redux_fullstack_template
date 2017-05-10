/**
 * Mongoose Models and Schema Declaration File
 */
'use strict';
import mongoose from 'mongoose';
let ObjectId = mongoose.Schema.ObjectId;

let taskSchema = mongoose.Schema({
    userId: ObjectId,
    description: {type: String, required: true},
    completed: {type: Boolean, default: false},
    createdDate: {type: Date, default: Date.now}
});

let subTaskSchema = taskSchema;
subTaskSchema.list = {type: [String]};

export let Task = mongoose.model('Task', taskSchema);
export let SubTaskList = mongoose.model('SubTaskList', subTaskSchema);