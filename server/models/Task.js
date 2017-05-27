/**
 * Mongoose Models and Schema Declaration File
 */
'use strict';
import mongoose from 'mongoose';

let taskSchema = mongoose.Schema({
    description: {type: String, required: true},
    completed: {type: Boolean, default: false},
    createdDate: {type: Date, default: Date.now}
});

export let TaskSchema = taskSchema;
export let Task = mongoose.model('Task', taskSchema);