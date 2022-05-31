import React, { Component } from "react";
import { Link } from "react-router-dom";
import './HeaderDetails.css';

class HeaderDetails extends Component{
    render(){
        return(
            <>
               <div id="headerDetails">
                    <div id="header_info">
                        <span id="booking_im" ><b>Booking.im</b> </span>
                        <Link id="login" to="/login" > <b>Login</b> </Link>
                        <Link id="register" to="/register"> <b>Register</b> </Link>
                    </div>
                    <h2 id="Find_your_next_stay">Book your Hotel . </h2>
                </div>
            </>
               
        )
    }
}

export default HeaderDetails