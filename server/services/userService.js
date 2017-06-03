/**
 * Services
 * Services are used to abstract out the logic needed to enact on data, before sending it off to the database. 
 */
import User from '../models/User';
import {Task} from '../models/Task';

export let createUser = (user, next) => {
    User.create(user, next);
};

export let getAllUsers = (next) => {
    User.find({}, next);
};

export let push = (userId, task, next) => {

    let newTask = new Task(task);
    User.update({_id: userId}, {$push: {todoList: newTask}}, next);
};

export let removeTask = (userId, task, next) => {

    let newTask = new Task(task);
    User.update({_id: userId}, {$push: {todoList: newTask}}, next);
};

export let updateTodoList = (userId, todoList, next) => {
    // let taskList = todoList.map(task => {
    //     return new Task({
    //         description: task.description
    //     });
    // });
    console.log(todoList);
    User.update({_id: userId}, {todoList: todoList}, next);
};

export let getAllUserFriends = (userId, next) => {
    // No-no... if objects become complex, this pyramid of doom grows significantly
    // User.findOne({_id: userId}, (err, user) => { // return a singular object
    //     Users.find({_id: {$in: user.friendListIds}}, (err, users) => {
    //         // assuming everything went PERFECTLY............
    //         next(err, users);
    //     });
    // });

    // let findUser = new Promise((resolve, reject) => {
    //     Mongo.find({_id: userId}, function(err, stuff){
    //         if(stuff)resolve(null, user);
    //         else reject(err, null)
    //     });
    // });

    let promises = [];

    promises.push(User.findOne({_id: userId}));
    promises.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            if(false){
                resolve("hello world!");
            }
            else {
                reject("error");
            }
        }, 50);
    }));
    promises.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello world!");
        }, 50);
    }));
    promises.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello world!");
        }, 50);
    }));
    Promise.all(promises).then((data) => {
        console.log(data);
        next(null, data);
    }).catch(error => {
        console.log(error);
        next(error, null);
    });
};