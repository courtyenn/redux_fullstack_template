/**
 * Bootstrapping File
 * This file bootstraps our server and runs it. As well as executes client side code to bootstrap our React/Redux application to the targetted element, `app`.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './build/components/App';
import store from './build/AppStore';

// This is the stateless React component that will help set us up for routing.
const router = (
    // Provider is Redux syntax to sync the store to the app.
    <Provider store={store}>
        {/* This is where we nest our App inside the Provider so anything that occurs inside our App will have access to our Store. It is good to nest only 1 element inside the Provider for that reason. */}
        <App />
    </Provider>
);

// This line is crucial to bootstrapping React.
ReactDOM.render(router, document.getElementById('app'));