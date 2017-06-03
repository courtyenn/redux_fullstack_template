import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route,Switch, Link } from 'react-router-dom';

export default class UserTodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            users: []
        };
    }

    componentWillMount(){
        axios.get('/users').then(response => {
            // response will be an object of response.data.users list...
            console.log(response.data);
            if(response.data && response.data.users){
                this.props.fetchUsers(response.data.users);
            }
        });
    }

    render(){
        let userList = [];
        if(this.props.users && this.props.users.length > 0){
            userList = this.props.users.map(user => {
                let todoList = [];
                if(user.todoList && user.todoList.length > 0){
                    todoList = user.todoList.map(task => <div key={task._id + '-task'}>{task.description}</div>);
                }
                return (
                <div key={user._id + '-user'}>
                    <Link to={`/users/${user._id}/todo`}>{user.name}</Link><br/>
                    <h3>TodoList</h3>
                    {todoList}
                </div>
                );
            });
        }
        return (
            <div>
                <h1>User Todo List</h1>
                {/* Eventually loop over users */}
                {userList}
            </div>
        );
    }
}