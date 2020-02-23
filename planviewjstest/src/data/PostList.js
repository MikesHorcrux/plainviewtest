import React, { Component} from "react";
import PlanView from "../data/pvdata.json";


class PostList extends Component {
    
    render(){
        
        return(
            <div>
                {PlanView.map((item)=> {
                    return(
                    <p> {item.Track}</p>
                    )
                })}
            </div>
        )
    }
}

export default PostList