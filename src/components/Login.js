import React, { Component } from 'react'
import NavBar from './NavBar';
import api from '../apis';

export default class Login extends Component {
    state = {
        data : {
            email : "",
            password : "",
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

    // JWT json web token 

    handleSubmit = async (event) => {
        event.preventDefault();
        try {     

            const token = await api.post('/auth', this.state.data);
            if(token){
                console.log(token.data);
                localStorage.setItem("token",token.data);
                this.props.history.push('/main');
            }
            else {
                throw new Error('JWT Not Found');
            }
        } 
        catch (error) {
            console.log(error.message);
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
                            <button className="btn btn-info">Sign In</button>
                        </div>

                    </form>

                    <div className="linesAndOr">
                        <div className="line"></div>
                        <span className="or"> Or </span>  
                        <div className="line"></div>
                    </div>

                    <div className="google-btn">
                        <button className="btn btn-primary">Sign In With Google</button>
                    </div>

                </div>
            </div>
        )
    }
}