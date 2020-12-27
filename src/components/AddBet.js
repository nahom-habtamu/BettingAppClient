import React, { Component } from 'react';
import MainTop from './MainTop';
import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';
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
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12">
                                <div className="main-box">
                                    <div className=" box-labels">
                                        <label className="select-date">Select Date</label>
                                        <label className="select-time">Select time</label>
                                    </div>
                                    <form>
                                        <div className="date-time-inputs">
                                            <input type="date"/>
                                            <input type="time"/>
                                        </div>
                                        <div className="container currency-wrapper">
                                            <select className="currency">
                                                <option>Pound</option>
                                                <option>Dollar</option>
                                                <option>Yuan</option>
                                                <option>US Dollar</option>
                                                <option>Canadian Dollar</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div><br/>
                            <div className="col-xl-7 col-lg-6 col-md-4 col-sm-12 add-share">
                                <Link to="/notification" className="icon-button">
                                    <BsFillPersonPlusFill size="1.5em" color="bluegreen"/>
                                </Link>
                                <Link to="/profile" className="icon-button">
                                    <FaShareAlt size="1.5em" color="bluegreen"/>
                                </Link>
                                <div className="button-helpers">
                                    <label>Invite users</label>
                                    <label>share link</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
