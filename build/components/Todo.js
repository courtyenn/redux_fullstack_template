import React from 'react';
import { render } from 'react-dom';

export default class Todo extends React.Component{
    constructor(){
        super();
    }

    /* Lifecycle Methods
        componentWillUpdate(){
            // is called on every render action
        }

        componentDidUpdate(){
            // is called on every successful update action
        }

        componentWillMount(){
            // is called only once. This is often used to populate your component with server data.
        }

        componentDidMount(){
            // is called only once. Initial logic that needs to be computed once data is available.
        }

    */

    // Method below is critical to returning a React Component. This is what the component will look like.
    render(){
        return (
            <div>
                <h1>Hi! I am JSX!</h1>
            </div>
        );
    }
}