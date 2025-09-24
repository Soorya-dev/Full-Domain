import React, { useReducer, useState } from 'react'


//! counter with UseState

const CounterAppWithState = () => {
  const [count, setcount] = useState(0)
  const increment= () =>{
    setcount(count+1)
  }
  return (
    <div>
      <h2>the count is {count}</h2>
      <button onClick={increment}>increase</button>
    </div>
  )
}

//! counter with reducer

function reducer(state,action){
  switch (action.type) {
    case "INCREASE":
      return state+1;
  
    default:
      return state;
  }
}
export const CounterWithReduce = () => {
  
    const [count, dispatch] = useReducer(reducer, 0 )
  return (
    <div>
        <h1>Count with reducer</h1>
        <h2>Count :{count}</h2>
        <button onClick={()=> dispatch({type: "INCREASE"})}>Increase</button>
        
    </div>
  )
}

export default CounterAppWithState