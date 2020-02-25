import React, { Component} from "react";
import lodash from "lodash";
import PlanView from "../data/pvdata.json";


//Groups Data By Track 
  const groupedByTrack = lodash.groupBy(PlanView.Items, 'Track.Title')
  

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