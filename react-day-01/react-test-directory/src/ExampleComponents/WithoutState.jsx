import React, { useState } from "react";

function WithoutState() {
  const [count,setCount] = useState(0)
  const handleClick = (arg) => {
    if(arg === '+'){
      setCount(count+1)
    }
    else{
      setCount(count-1)
    }
  }
  return (
    <React.Fragment>
   <button onClick={()=>handleClick('+')} >Increase</button>
   <p>{count}</p>
   <button onClick={()=>handleClick('-')} >decrease</button> 
    </React.Fragment>
  );
}

export default WithoutState;
