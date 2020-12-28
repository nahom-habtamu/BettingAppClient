import React, { Component } from 'react';
import MainTop from './MainTop';
import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';

export default class AddBet extends Component {
    state = {
        date : {
            day : "",
            month : "",
            year : "",
        },

        time : {
            hour : "",
            minutes : "",
        },

        currency : ""
    }

    handleDateChange = (event) => {
        const date = event.target.value;
        const pieces = date.split('-');
        const dateObject = {
            day : pieces[0],
            month : pieces[1],
            year : pieces[2],
        }
        this.setState({
            date : dateObject
        });
    }

    handleTimeChange = (event) => {
        const time = event.target.value;
        const pieces = time.split(":");

        const timeObject = {
            hour : pieces[0],
            minutes : pieces[1]
        }

        this.setState({
            time : timeObject
        })
    }

    handleSelectChange = (event) => {
        this.setState({
            currency : event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

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
                                    <form onSubmit = { this.handleSubmit }>
                                        <div className="date-time-inputs">
                                            <input onChange = {this.handleDateChange } type="date" name="date"/>
                                            <input onChange = {this.handleTimeChange } type="time" name="time"/>
                                        </div>
                                        <div className="container currency-wrapper">
                                            <select onChange = { this.handleSelectChange } className="currency">
                                                <option value="" default>Currency</option>
                                                <option value="pound">Pound</option>
                                                <option value="yuan">Yuan</option>
                                                <option value="usd">US Dollar</option>
                                                <option value="canadian dollar">Canadian Dollar</option>
                                            </select>
                                        </div>
                                        <button className="create-bet-btn">Create Bet</button>
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
