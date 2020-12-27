import React, { Component } from 'react';
import MainTop from './MainTop';
import { Link } from 'react-router-dom';
import { IoPersonAddSharp } from 'react-icons/io';
import { FaShareAlt } from 'react-icons/fa';

export default class AddBet extends Component {
    render() {
        return (
            <div>
                <MainTop topHeader="Start Bet"/>
                <div className="container">
                    <div className="start-bet">
                        Start Bet
                    </div>
                    <div className="date-header">
                        Completion Data and Time / currency
                    </div>
                    <div className="main-section">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                                <div className="main-box">
                                    <div className="box-labels">
                                        <label className="select-date">Select Date</label>
                                        <label className="select-time">Select time</label>
                                    </div>
                                    <div className="box-inputs">
                                        <input type="date"/>
                                        <input type="time"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                <Link to="/notification" className="icon-button">
                                    <IoPersonAddSharp size="1.5em" color="bluegreen"/>
                                </Link>
                                <Link to="/profile" className="icon-button">
                                    <FaShareAlt size="1.5em" color="bluegreen"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
