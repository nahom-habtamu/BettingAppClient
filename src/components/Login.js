import React, { Component } from 'react'
import NavBar from './NavBar';
export default class Login extends Component {
    state = {
        data : {
            email : "",
            password : "",
        },

        errors : {

        }
    }
    render() {
        return (
            <div>
                <NavBar activePage = "login"/>
                <div className="loginWrapper">
                    <div className="login-header">
                        <br/>
                        Login And Win Money
                    </div>
                    <form onSubmit= {this.handleSubmit }>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="email" 
                            onChange = { this.handleChange}
                            value = { this.state.data.email}

                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange = { this.handleChange}
                            value = { this.state.data.password}

                        />
                        <div className="signup-btn">
                            <button className="btn btn-info">Sign Up</button>
                        </div>

                    </form>

                    <div className="linesAndOr">
                        <div className="line"></div>
                        <span className="or"> Or </span>  
                        <div className="line"></div>
                    </div>

                    <div className="google-btn">
                        <button className="btn btn-primary">Sign Up With Google</button>
                    </div>

                </div>
            </div>
        )
    }
}
