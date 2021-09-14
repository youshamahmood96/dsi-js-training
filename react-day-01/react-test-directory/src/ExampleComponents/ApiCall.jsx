import React, { useEffect, useState } from 'react';
import EffectDemo from './EffectDemo';

const ApiCall = () => {
    const [data,setData] = useState([])
    const [flag,setFlag] = useState(false)
    // const [loaded,setIsLoaded] = useState(false)
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>res.json())
    //     .then(data=>{
           
    //             setData(data)
    //     })
    // },[])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            if(!flag){
                setData(data)
            }
        })
        return() =>{
            setFlag(true)
        }
    },[])
    console.log(data);
    return (
        <div>
            {
                data.map((user,idx)=>(<h1 key={idx} >{user.name}</h1>))
            }
        </div>
    );
};

export default ApiCall;