import React, {useEffect, useState} from 'react';

import {grabPVData} from './services/planviewAPI'

export const App = () => {
        const [data, setData] = useState([]);

        useEffect(()=>{
            setData('hello');
        },[])

    return(
        <h2> {JSON.stringify(data) } </h2>
    );
}