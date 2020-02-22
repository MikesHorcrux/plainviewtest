import axios from "axios";

//declaring api url 
//you may also use this for more complex urls and have a base url here instead.
export const url = 'https://planview-media.s3.us-west-2.amazonaws.com/interview/sessions.json';


//grabbing data from api with axios get 
export const grabPVData = async ()=> {
    const result = await axios.get(url).then(({Items}) => Items);
    return result;
}