import React, { Component} from "react";
import PlanView from "../data/pvdata.json";

//gouping all the arrays in an array by thier track
const groupBy = (key) => {
    return PlanView.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. 
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {}); // empty object is the initial value for result object
  };
  const groupedByTrack = groupBy('Track');
  
  

class PostList extends Component {
    render(){
        
        return(
            <div>
                
                {
                console.log(groupedByTrack)
                
                
                }
            </div>
        )
    }
}

export default PostList