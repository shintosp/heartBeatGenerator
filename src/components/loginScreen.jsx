import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import User from './user';
import doctor from './doctor';

class Login extends Component {
    state = {
        u_id: "",
        u_password: ""
    }

    handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value,
          [e.target.name]: e.target.value
        });
    };


    handleLogin = e => {
        e.preventDefault();
        if(this.state.u_id.toLocaleLowerCase() == 'user') {
            return this.props.history.push('/user')
        }
        else {
            return this.props.history.push('/doctor')
        }
    }
    //     let url =
    //         "/api/login?" +
    //         "u_email=" +
    //         this.state.u_id +
    //         "&u_password=" +
    //         this.state.u_password;
    //       fetch(url, {
    //         method: "GET"
    //       })
    //         .then(rs => rs.json())
    //         .then(result => {
    //             localStorage.setItem("User_Id", this.state.u_id);
    //             if(this.state.u_id.toLocaleLowerCase() == 'user') {

    //                 return <Redirect to="/user" />;
    //             }
    //             else {
    //                 return <Redirect to="/doctor" />;
    //             }
    //         })
    //         .catch(error => console.log(error));



    // handleMessage() {
    //     if (this.state.message === "not found") {
    //       return React.createElement(
    //         "p",
    //         { className: "msgError" },
    //         this.state.message
    //       );
    //     }
    //     else if (this.state.message === "Logged in successfully") {
    //       localStorage.setItem("User_Id", this.state.u_id);
    //       localStorage.setItem("User_name", this.state.u_name);
    //       return <Redirect to="/home" />;
    //     } 
    //     else {
    //       return true;
    //     }
    //     localStorage.setItem("User_Id", this.state.u_id);
    // }

    componentDidMount() {
        localStorage.removeItem("u_id");
    }

    render() { 
        return ( 
            <div className="login-form">
                <div className="hmlogin d_flex align_items_start justify_content_between flex_column">
                    <div className="bg_design"></div>
                    <div className="login_head">
                        <div className="logo">
                            <img src="/src/img/logo.png" alt="image" />
                        </div>
                    </div>

                    <div className="login_body">
                        <div className="left_side">
                            <h1>Your Heartbeat is Your Health</h1>
                        </div>
                        <div className="right_side">
                            <form onSubmit={this.handleLogin}>

                                <div className="form_details">
                                    <h1>Heartbeat Monitoring System</h1>
                                    <div className="form_group">
                                        <label>Username</label>
                                        <input className="form_control" type="text" placeholder="Enter Username"id="user_id"
                    name="u_id"
                    onChange={this.handleInput}/>
                                    </div>

                                    <div className="form_group">
                                        <label>Password</label>
                                        <input className="form_control" type="text" placeholder="Enter Password" type="password"
                    id="user_password"
                    name="u_password"
                    onChange={this.handleInput}/>
                                    </div>

                                    <a href="#" className="frgt_pw">Forget Password?</a>

                                    <div className="submit_form">
                                        <button type="submit" className="login_btn" id="loginsubmit">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="login_footer">
                        <p>All &#9400;copyrights are reserved 2019</p>
                    </div>

                </div>



            </div>
         );
    }
}
 
export default Login;