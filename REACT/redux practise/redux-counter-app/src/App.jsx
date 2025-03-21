import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/store';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);  // Accessing state correctly

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>  {/* Corrected dispatch */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>  {/* Corrected dispatch */}
    </>
  );
}

export default App;
