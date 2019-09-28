import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
class User extends Component {
    state = {
        userData: {
            name: "",
            email: "",
            age: "",
            hb: ""
        }
    }

    componentDidMount() {
        // let url =
        //     "/api/login?" +
        //     "u_email=" +
        //     this.state.u_id +
        //     "&u_password=" +
        //     this.state.u_password;
        // fetch(url, {
        //     method: "GET"
        // })
        // .then(rs => rs.json())
        // .then(result => {
        //   this.setState({ u_name: result.name });
        // })
        // .catch(error => console.log(error));
        this.setState({
            userData: {
                name: "Shinto",
                email: "abc@gmail.com",
                age: "28",
                hb: "60"
            }
        });

    }

    userMessage = () => {
        if (parseInt(this.state.userData.age) > 6 || parseInt(this.state.userData.age) < 15) {
            if (parseInt(this.state.userData.hb) > 100 || parseInt(this.state.userData.hb) < 60) {
                console.log(alert);
                return <span className="alert">ALERT!</span>
            }
        }
        else if (parseInt(this.state.userData.hb) > 95 || parseInt(this.state.userData.hb) < 65) {
            console.log(alert);
            return <span className="alert">ALERT!</span>
        }
        else {
            return <span className="no-alert">Heart Beat Rate is Normal:)</span>
        }
    }


    render() {
        return (
            // <div>
            //     <h1>User</h1>
            //     <div><label>Name: </label><span>{this.state.userData.name}</span></div>
            //     <div><label>Mail: </label><span>{this.state.userData.email}</span></div>
            //     <div><label>Age: </label><span>{this.state.userData.age}</span></div>
            //     <div><label>hb: </label><span>{this.state.userData.hb}</span> {this.userMessage()}</div>
            // </div>

            <div className="pt_dtls">
                <div className="pt_header d_flex align_items_center justify_content_between">
                    <div className="logo">
                        <img src="../src/img/logo.png" alt="image" />
                    </div>
                    <div className="doc_dtls d_flex  align_items_center">
                        <div className="doc_image">
                            <img src="/src/img/doctor.jpg" alt="image" />
                        </div>
                        <div className="doc_dtls">
                            <p className="doc_name">Dr. Emily Bauer</p>
                            <p className="doc_deg">MBBS/FRCS</p>
                        </div>
                    </div>
                </div>
                <div className="pt_body d_flex">
                    <div className="pt_list">
                        <ul>
                            <li>
                                <div className="pt_img">
                                    <img src="/src/img/profile_user.jpg" alt="image" />
                                </div>
                                <div>
                                    <p className="pt_name">{this.state.userData.name}</p>
                                    <p className="pt_age">{this.state.userData.age}</p>
                                </div>
                            </li>
                            {/* <li>
                        <div className="pt_img">
                            <img src="img/profile_user.jpg" alt="image">
                        </div>
                        <div>
                            <p className="pt_name">William Shank</p>
                            <p className="pt_age">Age: 28</p>
                        </div>
                    </li>
                    <li>
                        <div className="pt_img">
                            <img src="img/profile_user.jpg" alt="image">
                        </div>
                        <div>
                            <p className="pt_name">Winstin</p>
                            <p className="pt_age">Age: 28</p>
                        </div>
                    </li>
                    <li>
                        <div className="pt_img">
                            <img src="img/profile_user.jpg" alt="image">
                        </div>
                        <div>
                            <p className="pt_name">Amery costin</p>
                            <p className="pt_age">Age: 28</p>
                        </div>
                    </li> */}
                        </ul>
                    </div>

                    <div className="pt_hms">
                        <div className="d_flex align_items_start justify_content_between">
                            <div className="hertbeat">
                                <h4>Heartbeat</h4>
                                <p>{this.state.userData.hb}<span>/bpm</span></p>
                            </div>

                            <div className="step_count">
                                <h4>Count Your Steps</h4>
                                <p>5234 <span>steps/day</span></p>
                            </div>
                        </div>

                        <div className="pt_details">
                            <ul>
                                <li>First Name: <span>{this.state.userData.name}</span></li>
                                <li>Email: <span>{this.state.userData.email}</span></li>
                                <li>Age: <span>{this.state.userData.age}</span></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>


        );
    }
}

export default User;