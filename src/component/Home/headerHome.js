import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './HeaderHome.css';

const url='https://booking-im.herokuapp.com/cities'

class HeaderHome extends Component{

    constructor(props){
        super(props);
        this.state={
            city:'',
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option style={{textAlign: 'center', fonFamily: 'sans-serif', color: 'black',fontSize:'15px'}} value={item.city_id} key={item.city_id}>{item.city_name}</option>
                )
            })
        }
    }

    handleHotels=(event)=>{
        let hotelId=event.target.value;
        this.props.history.push(`/listing/${hotelId}`)
    }



    

    render(){
        return(
            <>
                <div id="headerHome">
                    <div id="header_info">  
                        <span id="booking_im" ><b>Booking.im</b> </span>
                        <Link id="login" to="/login"> <b>Login</b> </Link>
                        <Link id="register" to='/register'> <b>Register</b> </Link>
                        <div id="lat_long">
                            <button onclick="geolocation()" style={{fontFamily: 'sans-serif', marginTop: '5px',marginBottom: '10px',fontWeight: 900, fontSize: '10px', color:'#0071c2'}}>
                                Get Temperature (at your location)
                            </button>
                            <p id="out"></p>
                            <p id="address" style={{margin: 0,color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold'}}></p>
                            <div id="weather_icon" style={{marginTop: '5px',  width:'6%'}}></div>     
                        </div>
                        <h1 id="Find_your_next_stay_Home">Find your next stay </h1>
                        <h4 id="Search_for_hotels_in_your_place">Search for hotels, in your place ... </h4>
                    </div>
                    <div id="data_select">
                        <select id="city" onChange={this.handleHotels}>
                            <option style={{textAlign: 'center', fonFamily: 'sans-serif', color: 'gray'}}>Where are you going ?
                            </option>
                            {this.renderCity(this.state.city)}
                        </select>
                        <input id="check_in" type="text" placeholder="Check-in Date" onfocus="(this.type='date')" style={{textAlign: 'center'}}/>
                        <input id="check_out" type="text" placeholder="Check-out Date" onfocus="(this.type='date')" style={{textAlign: 'center'}}/>
                        <button id="search">Search</button>
                    </div>
                </div>
            </>
               
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({city:data})
        })

    }
}

export default withRouter(HeaderHome)