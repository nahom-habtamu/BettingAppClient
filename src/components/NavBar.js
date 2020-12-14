import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
    state = {
        loginOrSignup : ""
    }
    render() {
        return (
            <div className = "myContainer">
                <header>
                    <div className="nav-wrapper">
                       <div className="white-top">
                            <div className="logo">

                            </div>
                            <div className="brandName">
                                Escrow
                            </div>
                       </div>
                       <div className="blueAndButtons">
                            <div className="btn-group logInAndSignup">
                                <button
                                    style = {{ 
                                        backgroundColor : 
                                        this.props.activePage === "login" ? "white" : "",
                                        color : 
                                        this.props.activePage === "login" ? "#093636" : "black"
                                
                                    }} 
                                    className="btn btn-default signupBtn">
                                    <Link to='/login'>LOGIN</Link>
                                </button>

                                <button 
                                    style = {{ 
                                        backgroundColor : 
                                        this.props.activePage === "signup" ? "white" : "",
                                        color : 
                                        this.props.activePage === "signup" ? "#093636" : "black"
                                
                                    }} 
                                    className="btn btn-default loginBtn">
                                    <Link to='/signup'>SIGNUP</Link>
                                </button>
                            </div>
                       </div>
                    </div>
                </header>
            </div>
        )
    }
}