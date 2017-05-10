/**
 * Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
import {Task} from '../models/Task';


export let createTask = (task, next) => {
    Task.create(task, next);
};