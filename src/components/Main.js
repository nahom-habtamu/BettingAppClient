import React, { Component } from 'react';
import MainTop from './MainTop';
import StatusList from './StatusList';
import BetList from './BetList';
import NotificationList from './NotificationList';

export default class Main extends Component {
    render() {
        return (
            <div>
                <MainTop/>
                <StatusList/> 
                <BetList/>
                <NotificationList/>
            </div>
        )
    }
}



