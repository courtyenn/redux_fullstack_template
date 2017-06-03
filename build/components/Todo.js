import React from 'react';

export default class Todo extends React.Component {
    constructor(){
        super();
    }

    render(){
        let todoList = this.props.todoList.map((task, index) => {
        
        //make sure to note task is a object now, not a string
        return (<li key={task._id}>{task.description} - <button onClick={() => this.props.removeTodo(this.props._id, index)}>Remove</button></li>)
    });
        return (
            <div>
                <h1>Todo for {this.props.name}</h1>
                {todoList}
                <input type="text" ref="task" /><button onClick={() => this.props.addTodo(this.props._id, this.refs.task.value)}>Add</button>
            </div>
        );
    }
}