import React, { Component } from "react";
import lodash from "lodash";
import PlanView from "../data/pvdata.json";
class PostList extends Component {
  render() {
    //Groups Data By Track 
    const groupedByTrack = lodash.groupBy(PlanView.Items, 'Track.Title')
    console.log(PlanView.Items, groupedByTrack)
    //console.log(PlanView)
    function test(track) {
      for (var key in groupedByTrack) {
        groupedByTrack[key].map(track => {
          console.log(track.Title);
          console.log(track.Description)
          console.log("...")
        });
        // console.log(track)
        // console.log(groupedByTrack.track)
        // console.log("..........")
        // console.log(groupedByTrack.Build)
      }
    }
    test("Interact")
    return (
      <h1>test</h1>
    )
  }
}
export default PostList