import React, { Component} from "react";
import PlanView from "../data/pvdata.json";

class PostList extends Component {
    
    render(){
        
        return(
            <div>
                
                {
                    //I can grab the track in the console
                console.log(PlanView.Items[0].Track)}
            </div>
        )
    }
}

export default PostList