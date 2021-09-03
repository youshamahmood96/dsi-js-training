import React, { useEffect, useState } from 'react';

const ApiCall = () => {
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },0)
        return ()=>{
            console.log('ok');
        }
    },[])
    return (
        <div>
            {
                loading?<p>loading...</p>:<p>Fetch complete</p>
            }
        </div>
    );
};

export default ApiCall;