import React, { useState } from 'react';



const Counter = () => {
  const [Count,setCount]=useState(0)
  const increment= ()=>setCount(Count+1)
  const decrement= ()=>setCount(Count-1)
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
    </div>
  )
}

export default Counter ;

