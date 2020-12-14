import React, { Component } from 'react'
import NavBar from './NavBar'

export default class SignUp extends Component {
    state = {
        data : {
            fullName : "",
            email : "",
            password : "",
            userOrAgent : ""
        },

        errors : {

        }
    }

    handleChange = (event) => {
        const falseState = {...this.state.data};
        falseState[event.target.name] = event.target.value;
        this.setState({
            data : falseState
        });

    }

    handleUserOrAgent = (event) => {
        const falseState = { ...this.state.data};
        falseState["userOrAgent"] = event.target.value;
        this.setState({
            data : falseState
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.data);
    }
    render() {

        return (
            <div>
                <NavBar activePage = "signup"/>
                <div className="signupWrapper">
                    <div className="signup-header">
                        <br/>
                        SignUp And Enjoy 
                    </div>
                    <form onSubmit= {this.handleSubmit }>
                        <input 
                            type="text" 
                            placeholder="Full Name"
                            name="fullName" 
                            onChange = { this.handleChange }
                            value = { this.state.data.fullName}
                        />
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
                        <p className="signupUsLabel">Signup as</p>

                        <div className="radioWrapper" onChange = { this.handleUserOrAgent}>

                            <label
                                style = {{ 
                                    backgroundColor : this.state.data.userOrAgent === "user" ? "#093636" : "lightgray",
                                    color : this.state.data.userOrAgent === "user" ? "white" : "#093636",
                                }} 
                                htmlFor="user" 
                                className= "radio"
                                name="user">
                                User
                            </label>
                            <input type="radio" name="userOrAgent" value="user" id="user"/>

                            <label 
                                style = {{ 
                                        backgroundColor : this.state.data.userOrAgent === "agent" ? "#093636" : "lightgray",
                                        color : this.state.data.userOrAgent === "agent" ? "white" : "#093636",
                                    }} 
                                className= "radio" 
                                htmlFor="agent"
                                >Agent
                            </label>
                            <input type="radio" name="userOrAgent" value="agent" id="agent"/>

                        </div>

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
