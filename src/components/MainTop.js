import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserAlt} from 'react-icons/fa';

export default class MainTop extends Component {
    render() {
        return (
            <div>
                <div className="top-wrapper">
                    <div className="brand-logo">
                        <div className="logo">
                            
                        </div>
                        <div className="brand-name">
                            ESCROW
                        </div>
                    </div>

                    <div className="dashboard">
                        <div className="dashboard-text">{this.props.topHeader}</div>
                    </div>

                    <div className="top-buttons">
                        <Link to="/notification" className="icon-button">
                            <FaBell size="1.5em" color="bluegreen"/>
                        </Link>
                        <Link to="/profile" className="icon-button">
                            <FaUserAlt size="1.5em" color="bluegreen"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
