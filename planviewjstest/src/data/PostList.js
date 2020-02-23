import React, { Component} from "react";
import PlanView from "../data/pvdata.json";


class PostList extends Component {
    
    render(){
        
        return(
            <div>
                {/* {PlanView.map((item)=> {
                    return(
                    <p> {item.Track}</p>
                    )
                })} */}
                {JSON.stringify(PlanView.Items[1].Track)}
                {console.log(PlanView)}
            </div>
        )
    }
}

export default PostList