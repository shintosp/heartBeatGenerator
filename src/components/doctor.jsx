import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

class Doctor extends Component {
    state = {  
        user_id: ""
    }
    
    render() { 
        return (  
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

                    <div class="pt_body d_flex">
                        <div class="pt_list">
                            <ul>
                                <li>
                                    <div class="pt_img">
                                        <img src="img/profile_user.jpg" alt="image" />
                                    </div>
                                    <div>
                                        <p class="pt_name">Jone Winstin</p>
                                        <p class="pt_age">Age: 28</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="pt_img">
                                        <img src="img/profile_user.jpg" alt="image" />
                                    </div>
                                    <div>
                                        <p class="pt_name">William Shank</p>
                                        <p class="pt_age">Age: 28</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="pt_img">
                                        <img src="img/profile_user.jpg" alt="image" />
                                    </div>
                                    <div>
                                        <p class="pt_name">Winstin</p>
                                        <p class="pt_age">Age: 28</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="pt_img">
                                        <img src="img/profile_user.jpg" alt="image" />
                                    </div>
                                    <div>
                                        <p class="pt_name">Amery costin</p>
                                        <p class="pt_age">Age: 28</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="pt_hms d_flex align_items_start justify_content_between">
                            <div class="hertbeat">
                                <Link to="/User">{this.state.user_id}</Link>    
                            </div>
                        </div>

                        
              
                    </div>
                </div>

        );
    }

    componentWillMount() {
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
            user_id: "ABC",

        });
    }
}
 
export default Doctor;