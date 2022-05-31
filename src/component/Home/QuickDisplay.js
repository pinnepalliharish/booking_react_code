import React from "react";
import {Link} from 'react-router-dom'

const QuickDisplay = (props) =>{
    
    const cityInfo=({cityData})=>{
        if(cityData){
            return cityData.map((item) => {
                return (
                    <>
                        <Link to={`/listing/${item.city_id}`} key={item.city_id}>
                            <div id="one">
                                <img src={item.city_image} alt="agra img" style={{height: '270px',width:' 100%', marginBottom: '2px'}}/>
                                <h4 style={{fontFamily: 'sans-serif', textAlign: 'center', marginTop: '2px', marginBottom: '2px',color:'#0953bb'}}>{item.city_name}</h4>
                                <h6 style={{fontFamily: 'sans-serif', textAlign: 'center', color: 'gray', marginTop: 0}}>5 Properties Available</h6>
                            </div>
                        </Link>
                    </>
                    
            )
            })
        }
    }

    return(
        <>
            {cityInfo(props)}
        </>
    )
}

export default QuickDisplay