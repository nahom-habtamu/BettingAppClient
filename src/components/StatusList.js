import React, { Component } from 'react';
import Status from './Status';

export default class StatusList extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="searchAndYourBets">
                        <div className="your-bets">
                            your bets
                        </div>
                        <div className="search">
                            <input type="text" placeholder= "Search"/>
                        </div>
                    </div>
            </div>
                
                <div className="container status-list">
                    <Status
                        count= "1"
                        statusName="Active Bets"
                        iconName="active"
                    />
                    
                    <Status
                        count= "1"
                        statusName="Active Bets"
                        iconName="active"
                    />   

                    <Status
                        count= "1"
                        statusName="Lost"
                        iconName="thumbs-down"
                    />

                    <Status
                        count= "3"
                        statusName="Wins"
                        iconName="dollar-sign"
                    />
                                                    
                    <Status
                        count= "10"
                        statusName="Disputes"
                        iconName="dispute"
                    />
                    
                </div>
            </div>
        )
    }
}
