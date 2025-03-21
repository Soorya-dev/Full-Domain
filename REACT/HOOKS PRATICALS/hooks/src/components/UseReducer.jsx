import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
  function UseReducer() {
    // Initial state for the counter
    const initialState = { count: 0 };
  
    // Using useReducer to handle the state
    const [state, dispatch] = useReducer(counterReducer, initialState);
  
    return (
      <div>
        <h1>Counter: {state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    );
  }

export default UseReducer;
