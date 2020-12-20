import React, { Component } from 'react';
import MainTop from './MainTop';
import StatusList from './StatusList';
import BetList from './BetList';

export default class Main extends Component {
    render() {
        return (
            <div>
                <MainTop/>
                <StatusList/> 
                
                <BetList/>
            </div>
        )
    }
}



