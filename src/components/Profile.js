import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Link to="/main" className="icon-button">
                            <FaHome size="1.5em" color="bluegreen"/>
                    </Link>
                </div>
            </div>
        )
    }
}


/**
             a profile page contains 
 * 
                1. user name 
                2. profile photo if provided 
                3. phone number if provided 
                4. And other stats like password and  email will be hidden
 
 
 
 */ 
