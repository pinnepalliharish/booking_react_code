import React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Listing from "./component/Listing/listing";
import Details from './component/details/hotelDetails'
import Login from "./component/login/login";
import Register from "./component/login/register";


const Router =()=>{
    return(
        <BrowserRouter>
            <div>
                 <Route exact path="/" component ={Home}/>
                 <Route exact path="/listing/:cityId" component ={Listing}/>
                 <Route exact path="/details" component ={Details}/>
                 <Route exact path="/login" component ={Login}/>
                 <Route exact path="/register" component ={Register}/>


            </div>
        </BrowserRouter>
    )
}


export default Router