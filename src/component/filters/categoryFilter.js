import React,{Component} from "react";
import axios from 'axios';

let url ="https://booking-im.herokuapp.com/filter";

class CategoryFilter extends Component{

    filterCategory=(event)=>{
        let CategoryId=event.target.value;
        let cityId=this.props.cityId;
        let CategoryUrl=`${url}/${cityId}?category_id=${CategoryId}`;
        axios.get(CategoryUrl)
        .then((res=>{
            this.props.hotelsPerCategory(res.data)
        }))

    }

    render(){
        return(
            <div id="category_filter">
                <h5>Category Filter:</h5>
                <div id="cat_inp" onChange={this.filterCategory}>
                    <label>
                        <input type="checkbox" value="1" name="category"/>Deluxe <br/> <br/>
                    </label>
                    <label>
                        <input type="checkbox" value="2" name="category"/>Ordinary  <br/> <br/>
                    </label>
                    <label>
                        <input type="checkbox" value="3" name="category"/>3-star  <br/> <br/>
                    </label>
                    <label>
                        <input type="checkbox" value="4" name="category"/>Resort  <br/> <br/>
                    </label>
                    <label>
                        <input type="checkbox" value="5" name="category"/>5-star  <br/> <br/>
                    </label>
                </div>
            </div>
        )
    }
}

export default CategoryFilter


