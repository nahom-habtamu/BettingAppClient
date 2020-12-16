import React, { Component } from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux';
import { getUsersInitiate, addUserInitiate} from '../actions';

class SignUp extends Component {
    state = {
        data : {
            fullName : "",
            email : "",
            password : "",
            role : ""
        },

        errors : {

        }
    }
    componentDidMount(){
        this.props.getUsersInitiate();
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
        falseState["role"] = event.target.value;
        console.log(event.target.value);
        this.setState({
            data : falseState
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.data);
        this.props.addUserInitiate(this.state.data);
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
                                    backgroundColor : this.state.data.role === "user" ? "#093636" : "lightgray",
                                    color : this.state.data.role === "user" ? "white" : "#093636",
                                }} 
                                htmlFor="user" 
                                className= "radio"
                                name="user">
                                User
                            </label>
                            <input type="radio" name="role" value="user" id="user"/>

                            <label 
                                style = {{ 
                                        backgroundColor : this.state.data.role === "agent" ? "#093636" : "lightgray",
                                        color : this.state.data.role === "agent" ? "white" : "#093636",
                                    }} 
                                className= "radio" 
                                htmlFor="agent"
                                >Agent
                            </label>
                            <input type="radio" name="role" value="agent" id="agent"/>

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

const mapStateToProps = (state) => {
    return {
        user : state.users
    }
}

export default connect(mapStateToProps, { getUsersInitiate, addUserInitiate })(SignUp);