import React, { Component} from "react";
import lodash from "lodash";
import PlanView from "../data/pvdata.json";



  
  

class PostList extends Component {
    render(){
      //Groups Data By Track 
      const groupedByTrack = lodash.groupBy(PlanView.Items, 'Track.Title')
     // console.log(groupedByTrack)
      //console.log(PlanView)
      
      for (var i = 0; i < groupedByTrack.Build.length; i++) {
        console.log(groupedByTrack.Build[i].Title);
        console.log(groupedByTrack.Build[i].Description);
        console.log("...")
    }
        return(
            <div>
                
                test
            </div>
        )
    }
}

export default PostList