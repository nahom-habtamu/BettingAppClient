import React, { Component } from 'react';
import MainTop from './MainTop';
import StatusList from './StatusList';

export default class Main extends Component {
    render() {
        return (
            <div>
                <MainTop/>
                <StatusList/> 
            </div>
        )
    }
}



