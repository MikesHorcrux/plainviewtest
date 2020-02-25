import React, { Component} from "react";
import lodash from "lodash";
import PlanView from "../data/pvdata.json";



  
  

class PostList extends Component {
    render(){
      //Groups Data By Track 
      const groupedByTrack = lodash.groupBy(PlanView.Items, 'Track.Title')
      //console.log(groupedByTrack)
      //console.log(PlanView)
       
      
      function test(track){
        
        //  for (var i = 0; i < groupedByTrack.track.length; i++) {
        //  console.log(groupedByTrack.track[i].Title);
        //  console.log(groupedByTrack.track[i].Description);
        //  console.log("...")
        console.log(track)
            console.log(groupedByTrack.track)
            console.log("..........")
            console.log(groupedByTrack.Build)
         }
         test("Build")

         
    
        return(
        <h1>test</h1>
        )
    }
}

export default PostList