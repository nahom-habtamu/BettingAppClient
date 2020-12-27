import React, { Component } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default class CreateBet extends Component {
    render() {
        return (
            <div>
                <div className="box">
                    <div className="blue-line"></div>
                    
                    <div className="setup-bet">Set up new Bet</div>

                    <div className="addBetIcon">
                        <AiFillFileAdd size="6em"/>
                    </div>
                    <button 
                        className="initiate-bet-button">
                        <Link to="/addBet">Initiate</Link>
                    </button>
                </div>
            </div>
        )
    }
}
