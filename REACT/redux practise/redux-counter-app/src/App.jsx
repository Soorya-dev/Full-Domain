import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/store';


import React from 'react'

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A simple counter component with increment and decrement buttons
 * @returns {JSX.Element}
 */

/******  f1f3cc4f-4561-4cee-aafe-66b953580d53  *******/

const counter = () => {
  let count =useState(0)
function increment(){
  count+=1
}
function decrement(){
  count--
}
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment} >increment</button>
      <button onClick={decrement} >decrement</button>

    </div>
  )
}

export default counter