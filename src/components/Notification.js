import React, { Component } from 'react'

export default class Notification extends Component {
    render() {
        return (
            <div>
                <div className="container notification-wrapper">
                    <div className="notification-box">
                        <div className="left-notification">
                            <div className="notification-header">
                                Invitation to join a bet
                            </div>
                            <div className="notification-description">
                                Surafel haimanot is inviting you to join a bet
                            </div>
                            <div className="notification-date">
                                Mar 12, 2020
                            </div>
                        </div>
                        <div className="middle-notification">
                            <div className="money">
                                <div className="value">
                                   $100
                                </div>
                                <div className="key">
                                    Won
                                </div>
                            </div>

                            <div className="category">
                                <div className="value mem">
                                    4
                                </div>
                                <div className="key">
                                    Categories
                                </div>                           
                            </div>
                            
                             <div className="member">
                                <div className="value mem">
                                    4
                                </div>
                                <div className="key">
                                    Members
                                </div>                           
                            </div>
                        </div>
                        <div className="right-notification">
                            <button className="view-button">View</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
