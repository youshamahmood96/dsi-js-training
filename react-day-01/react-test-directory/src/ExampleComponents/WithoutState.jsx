function WithoutState() {
  let count = 0
  const handleClick = (arg) =>{
    if(arg === '+'){
      count++
    }
    else{
      count--
    }
  }
  return (
    <React.Fragment>
    <button onClick={e=>{console.log(e)}} ></button>
   <button onClick={handleClick('+')} >Increase</button>
   <p>{count}</p>
   <button onClick={handleClick('+')} >decrease</button>  
    </React.Fragment>
  );
}

export default WithoutState;
