import React, { Component } from 'react'
export default class Bet extends Component {
    render() {
        return (
            <div>
                <div className="box">
                    <div className="blue-line"></div>
                    <div className="hostAndMember">
                        <div className="host">
                            <div className="key">
                                Host
                            </div>
                            <div className="value">
                                { this.props.host ? this.props.host : "John Doe"}
                            </div>
                        </div> 
                        <div className="members">
                            <div className="key">
                                Members
                            </div>
                            <div className="value mem">
                                { this.props.members ? this.props.members : 0}
                            </div>
                        </div>
                    </div>
                    <div className="witCatAndDays">
                        <div className="witnesses">
                            <div className="key">
                                Witnesses
                            </div>
                            <div className="value mem">
                                { this.props.witness ? this.props.witness : 0}
                            </div>
                        </div> 
                        <div className="categories">
                            <div className="key">
                                Categories
                            </div>
                            <div className="value mem">
                                { this.props.categories ? this.props.categories : 0}
                            </div>
                        </div> 
                        <div className="days-left">
                            <div className="key">
                                Days Left
                            </div>
                            <div className="value mem">
                                { this.props.daysleft ? this.props.daysleft : 0}
                            </div>
                        </div>
                    </div>

                    <div className="moneyAndAmount">
                        <div className="money">
                            { this.props.amountInEscrow ? this.props.host : "$100"}
                        </div>
                        <div className="key">
                            Amount In Escrow
                        </div>
                    </div>
                    <div className="dateWrapper">
                        <div className="date">
                            <div className="key">
                                Date started
                            </div>
                            <div className="value">
                                { this.props.dateStarted ? this.props.host : "Mar 12, 2020"}
                            </div>
                        </div>
                    </div>

                    <button 
                        className="view-button">
                        View
                    </button>
                </div>
            </div>
        )
    }
}
