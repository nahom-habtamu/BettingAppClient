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
                    <div className="row">
                        <div className="col-3-lg col-4-md col-6-sm col-6-xs">
                            <Status
                                count= "1"
                                statusName="Active Bets"
                                iconName="active"
                            />
                        </div>
                        <div className="col-3-lg col-4-md col-6-sm col-6-xs">
                            <Status
                                count= "1"
                                statusName="Active Bets"
                                iconName="active"
                            /> 
                        </div>
                        
                        <div className="col-3-lg col-4-md col-6-sm col-12-xs">
                            <Status
                                count= "1"
                                statusName="Lost"
                                iconName="thumbs-down"
                            />
                        </div>
                        
                        <div className="col-3-lg col-4-md col-6-sm col-6-xs">
                            <Status
                                count= "3"
                                statusName="Wins"
                                iconName="dollar-sign"
                            />
                        </div> 
                        <div className="col-3-lg col-4-md col-6-sm col-6-xs">                              
                            <Status
                                count= "10"
                                statusName="Disputes"
                                iconName="dispute"
                            />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


                  
                    
                     

                   

                     