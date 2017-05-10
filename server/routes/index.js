/**
 * Routing file
 * This file holds all the possible routes our app can make. It also has a reference to services to help keep logic out of this layer. 
 */
'use strict';
import {createTask} from '../services/taskService';
import {createUser} from '../services/userService';

export default (app) => {

    // We can create an API by this.
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/todo', (req, res) => {
        let myTodo = [todoZero, todoOne];
        res.json(myTodo);
    });

    app.get('/todo/:id', (req, res) => {
        
        console.log(`Requesting Todo list by the id of: ${req.params.id}`);
        res.json(fakeTodoDatabaseCollection[req.params.id]);
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

    app.post('/task/:id/subtasklist', (req, res) => {
        createSubTaskList(req.body, (err, data) => {
            if(!err){
                console.log(data);
            }

            res.json(data);
        });
    });

    app.post('/task/subtasklist?completed', (req, res) => {

        createSubTaskList(req.body, req.params.query, (err, data) => {
            if(!err){
                console.log(data);
            }

            res.json(data);
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

}