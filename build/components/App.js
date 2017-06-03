import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route,Switch, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreator';
// import BasicRouting from './BasicRouting';
// import Todo from './Todo';
import Todo from './Todo';
import UserTodoList from './UserTodoList';

// Redux requires to give a correct mapping of what State should ultimately look like. State is how React and Redux work. What the method below is doing is assigning state to an object, which will represent what props will look like as it descends through the app.
let mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

// Binds actions to the dispatch object. The dispatch object is the lifecycle of Redux that gets called whenever there is a state change. When it receives an event, it executes the method that we implemented in our actionCreator module.
let mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

class App extends React.Component {
    constructor(){
        super();
        this.navigateToSingleUser = this.navigateToSingleUser.bind(this);
    }

    navigateToSingleUser(routeProps){
        console.log(routeProps);
        let user = this.props.users.filter(user => user._id === routeProps.match.params.id)[0];
        return <Todo {...user} {...routeProps} addTodo={this.props.addTodo} removeTodo={this.props.removeTodo} /> 
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Link to="/">Home</Link><br/>
                    <Link to="/users">Users</Link>
                    <Route exact path="/users" render={(routeProps) => <UserTodoList {...this.props} {...routeProps} />} />
                    <Route path="/users/:id/todo" render={this.navigateToSingleUser} />
                    
                </div>
            </BrowserRouter>
        );
    }
}

// connect() is used to inject props directly into a container component.
let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
