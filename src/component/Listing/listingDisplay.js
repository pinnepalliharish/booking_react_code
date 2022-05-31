import React from "react";
import {Link} from 'react-router-dom';
import './Listing.css'


const ListingDisplay =(props)=>{

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                return listData.map((item) => {
                    return(
                            <>
                                <div id="hotel">
                                    <Link to={`/details?hotelID=${item.id}`}><img src={item.image_in} id="hotel_image" alt="Nature-Resort"/></Link>
                                    <h3 id="hotel_name">{item.name}</h3>
                                    <h6>Nature Resort in Agra features a garden and a terrace. The accommodation offers a 24-hour front desk.It features free WiFi and parking, pets are allowed for free in the accommodation.</h6>
                                    <h4>Review :{item.review}</h4>
                                    <h5>Rating / 10 : {item.rating} </h5>
                                    <Link to={`/details?hotelID=${item.id}`}><button id="btn">View Hotel Details</button></Link>
                                </div>
                                
                            </>
                           
                        
                    )
                })
            }
            else{
                return(
                    <>
                        <h2 style={{textAlign:'center', color:'#003585'}}>No Data For Filter</h2>
                    </>
                )
            }
        }
        else{
            return(
                <>
                    <h1 style={{textAlign:'center', color:'#003585'}}>Your Hotels are on the way .. Please Wait.</h1>
                </>
            )
        }
    }
    
    return(
        <div id="hotels_list">
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay