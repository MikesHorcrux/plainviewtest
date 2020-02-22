// import React from 'react';
// import axios from 'axios';


// export default class pvAPIItems extends React.Component{

//     state ={
//         items: [ ]
//     }

    

//     componentDidMount(){
//         axios.get("https://planview-media.s3.us-west-2.amazonaws.com/interview/sessions.json").then(results => {
//             console.log(results);
//             this.setState({items: results.data});
//         });

//     }

//     render(){
//         return(
//             <ul>
//                 {this.state.items.map(item => <li>{item.Items}</li>)}
//             </ul>
//         )
//     }
// }