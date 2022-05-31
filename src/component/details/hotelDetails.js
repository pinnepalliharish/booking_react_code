import React,{Component} from "react";
import axios from 'axios';
import HeaderDetails from './headerDetails';
import Footer from './footerDetails'
import './details.css';

const url='https://booking-im.herokuapp.com/hotel_data'


class Details extends Component{

    constructor(props){
        super(props)
        this.state={
            details:''
        }
    }

    render(){

        let details=this.state.details;
        return(
            <>  
                <HeaderDetails/>
                <>
                    <center>
                        <div id="hotel_details">
                            <h3>HOTEL DETAILS</h3>
                            <center>
                                <div id="image_in">
                                    <div id="hotel_inside_text">
                                        <p>HOTEL IMAGE</p>
                                    </div>
                                    <div id="room_img">
                                        <img src={details.image_out} alt=""/>
                                    </div>
                                </div>
                                <div id="image_out">
                                    <div id="hotel_outside_text">
                                        <p>ROOM IMAGE</p>
                                    </div>
                                    <div id="hotel_img">
                                        <img src={details.image_in} alt=""/>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </center>
        
                    <br/>

                    <center>
                        <div id="services">
                        {/* <!-- <img src="D:\programming\web_Development_Edureka\2nd_project\services.png" alt=""> --> */}
                            <div id="service">
                                <i class="fa-solid fa-wifi"></i><br/>
                                <span id="free">Free Wifi</span>
                            </div>
                            <div id="service">
                                <i class="fa-solid fa-square-parking"></i><br/>
                                <span id="free">Free Parking</span>
                            </div>
                            <div id="service">
                                <i class="fa-solid fa-virus-covid-slash"></i><br/>
                                <span id="free">Covid Free</span>
                            </div>
                            <div id="service">
                                <i class="fa-solid fa-shower"></i><br/>
                                <span id="free">24x7 Water</span>
                            </div>
                            <div id="service">
                                <i class="fa-solid fa-clock-rotate-left"></i><br/>
                                <span id="free">On desk</span>
                            </div>
                        </div>
                    </center>                
            
                    <br/>
                    <br/>
                    <br/>
                    <center>
                        <div id="cost_details">
                            <h2>PAYMENT DETAILS</h2>
                            <span>HOTEL NAME : {details.name}</span><br/> <br/>
                            <span>CITY : {details.city}</span><br/><br/>
                            <span>CATEGORY (HOTEL TYPE) : {details.category}</span><br/><br/>
                            <span>COST (PER DAY /24 HRS) : {details.cost}</span><br/><br/>  
                            <button>PAY AND BOOK</button>
                        </div>
                    </center>
                </>
                <Footer/>
            </>
        )
    }
    async componentDidMount(){
        let hotelid = this.props.location.search.split('=')[1];
        let response=await axios.get(`${url}/${hotelid}`)
        this.setState({details:response.data[0]})
    }
}




export default Details