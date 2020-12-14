import React, { Component } from 'react'
import SignUp from './SignUp';
import Login from './Login';

import { BrowserRouter, Route } from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component = {Login}/>
                        <Route path="/signup" exact component = {SignUp}/>
                        <Route path="/login" exact component = {Login}/>
                    </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
