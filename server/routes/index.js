/**
 * Routing file
 * This file holds all the possible routes our app can make. It also has a reference to services to help keep logic out of this layer. 
 */
'use strict';
import {createTask} from '../services/taskService';
import * as UserService from '../services/userService';

export default (app) => {

    // We can create an API by this.
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/task', (req, res) => {
        createTask(req.body, (err, data) => {
            if(!err){
                console.log(data);
                res.json(data);
            }
            else {
                res.json(err);
            }
        });
    });

    app.post('/user', (req, res) => {
        console.log(req.body);
        createUser(req.body, (err, data) => {
            if(!err){
                console.log(data);
            }

            res.json(data);
        });
    });

    app.get('/users', (req, res) => {
        UserService.getAllUsers((err, users) => {
            if(users){
                // console.log('USERS! : ', users); // debugging purposes
                res.json({users});
            }
            else {
                res.statusCode(400);
                res.send('Error!');
            }
        });
    });

    app.put('/users/:id/task', (req, res) => {
        console.log('Is our ID there?', req.params.id);
        console.log('Is our correct task there?', req.body);
        UserService.push(req.params.id, req.body, (err, modifiedObject) => {
            if(!err){
                res.json(modifiedObject);
            }
            else {
                res.json({error: 'There was an error!', data: null});
            }
        });
    });

    app.put('/users/:id/todoList', (req, res) => {
        console.log('Is our ID there?', req.params.id);
        console.log('Is our correct todoList there?', req.body);
        UserService.updateTodoList(req.params.id, req.body, (err, modifiedObject) => {
            if(!err){
                res.json(modifiedObject);
            }
            else {
                res.json({error: 'There was an error!', data: null});
            }
        });
    });

    app.get('/users/:id/test', (req, res) => {
        console.log('Is our ID there?', req.params.id);
        UserService.getAllUserFriends(req.params.id, (err, data) => {
            res.json({error: err, data: data});
        });
    });

    

}