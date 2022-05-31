import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay'
import HeaderListing from './headerListing';
import Footer from './footerListing';
import CategoryFilter from '../filters/categoryFilter';
import CostFilter from '../filters/costFilter'


let hotelurl='https://booking-im.herokuapp.com/hotels_list/'

class Listing extends Component{
    constructor(props){
        super(props);

        this.state={
            hotelList:''
        }
    }

    setDataPerFilter=(data)=>{
        this.setState({hotelList:data})
    }

    render(){
        return(
            <>
                <HeaderListing/>
                <div id="filter_and_hotels">
                    <div id="filter">
                        <CategoryFilter cityId={this.props.match.params.cityId}
                        hotelsPerCategory={(data=>{this.setDataPerFilter(data)})}/>
                        <hr/>
                        <CostFilter cityId={this.props.match.params.cityId}
                        hotelsPerCost={(data=>{this.setDataPerFilter(data)})}/>
                     </div>
                    <ListingDisplay listData={this.state.hotelList}/>
                </div>
                
                <Footer/>
            </>
        )
    }
    componentDidMount(){
        let cityid = this.props.match.params.cityId;
        axios.get(`${hotelurl}${cityid}`)
        .then((res)=>{this.setState({hotelList:res.data})})
    }
    
}

export default Listing