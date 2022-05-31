import React, {Component} from "react";
import './quickSearch.css'
import QuickDisplay from './QuickDisplay';

const url= "https://booking-im.herokuapp.com/cities";

class QuickSearch extends Component{
    constructor(){
        super()
        this.state={
            cities:''
        }
    }

    render(){
        return(
            <>
                <div id="s_body">
                    <h4 id="Explore_top_Places_in_India"  >Explore top Places in India </h4>
                    <h6 id="These_popular_destinations_have_a_lot_to_offer">These popular destinations have a lot to offer</h6>
                    <QuickDisplay cityData={this.state.cities}/>
                </div>
                
            </>
        )
    }
    //api calling when page is loaded

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({cities:data})
        })
    }
}




export default QuickSearch