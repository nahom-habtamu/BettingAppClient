import React, { Component } from 'react'
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';
import AddBet from './AddBet';

import { BrowserRouter, Route } from 'react-router-dom'
import NotificationList from './NotificationList';
import Profile from './Profile';
export default class App extends Component {
    state = {
        isLoggedIn : true
    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component = {Login}/>
                        <Route path="/signup" exact component = {SignUp}/>
                        <Route path="/login" exact component = {Login}/>
                        {this.state.isLoggedIn && <Route path="/main" exact component = { Main }/>}
                        {this.state.isLoggedIn && <Route path="/notifications" exact component = {NotificationList}/>}
                        {this.state.isLoggedIn && <Route path="/profile" exact component = { Profile }/>}
                        {this.state.isLoggedIn && <Route path="/addBet" exact component = { AddBet }/>}
                    </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
