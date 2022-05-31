import React,{Component} from "react";
import axios from 'axios';

let url ="https://booking-im.herokuapp.com/filter";



class CostFilter extends Component{

    filterCost = (event) => {
        let cityId = this.props.cityId
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        
        let costUrl = `${url}/${cityId}?lcost=${lcost}&hcost=${hcost}`;
        
        axios.get(costUrl)
        .then((res) => {this.props.hotelsPerCost(res.data)})
    }

    render(){
        return(
            <div id="cost_filter">
                <h5>Cost Filter:</h5>
                <div id="cat_inp" onChange={this.filterCost}>
                    <label>
                        <input type="checkbox" value="500-800"/>500-800      <br/> <br/>
                    </label>
                    <label>
                        <input type="checkbox" value="500-1000"/>500-1000    <br/> <br/>
                    </label>
                    <label>
                        <input type="checkbox" value="1000-1500"/>1000-1500  <br/> <br/>
                    </label>
                    <label>
                        <input type="checkbox" value="1500-2000"/>1500-2000  <br/> <br/>
                    </label>
                    <label>
                        <input type="checkbox" value="2000-2500"/>2000-2500  <br/> <br/>
                    </label>
                </div>
            </div>
        )
    }
}

export default CostFilter


