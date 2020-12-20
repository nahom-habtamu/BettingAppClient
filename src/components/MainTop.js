import React, { Component } from 'react'
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
                        <div className="dashboard-text">Dashboard</div>
                    </div>

                    <div className="top-buttons">
                        <button className="icon-button">
                            <FaBell size="1.5em" color="bluegreen"/>
                        </button>
                        <button className="icon-button">
                            <FaUserAlt size="1.5em" color="bluegreen"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
