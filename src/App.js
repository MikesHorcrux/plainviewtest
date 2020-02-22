import React, {useEffect, useState} from 'react';

import {grabPVData} from './services/planviewAPI'

export const App = () => {
        const [data, setData] = useState([]);

        useEffect(()=>{
            grabPVData().then(APIData => setData(APIData));
        },[])

    return(
        <h2> {JSON.stringify(data) } </h2>
    );
}