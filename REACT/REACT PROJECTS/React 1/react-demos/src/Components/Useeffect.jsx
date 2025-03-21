import React, { useEffect,useState } from 'react'
// useEffect lets you perform side effects like fetching data, updating the DOM, or starting a timer.
// It runs after the component renders, and you can control when it runs using the dependency array.


const LearnEffect = () => {
    const [value,setValue]=useState(0)

    useEffect(()=>{
        console.log("calling useEffect");
            document.title=`increment ${value}`;
        
    },[value])
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={()=>setValue(value+1)}>CLick ME</button>
    </div>
  )
}

export default LearnEffect