import React, { useEffect, useState } from 'react';
import EffectDemo from './EffectDemo';

const ApiCall = () => {
    const [data,setData] = useState([])
    const [flag,setFlag] = useState(0)
    const [loaded,setIsLoaded] = useState(false)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
           
                setData(data)
        })
    },[])
    console.log(data);
    return (
        <div>
            {
                data.map(rt=>(<EffectDemo data={rt} ></EffectDemo>))
            }
        </div>
    );
};

export default ApiCall;