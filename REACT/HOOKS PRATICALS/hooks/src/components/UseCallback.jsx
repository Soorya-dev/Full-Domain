import React, { useState, useCallback, memo } from 'react';

// Parent component demonstrating useCallback with a memoized child component
const Parent = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Memoized function for incrementing count
  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Count: {count}</h2>
      {/* Pass memoized function to child */}
      <ChildButton onClick={incrementCount} />
      <button onClick={() => setToggle(!toggle)}>
        Toggle State (Parent State)
      </button>
    </div>
  );
};

// Memoized child component
const ChildButton = memo(({ onClick }) => {
  console.log('Rendering ChildButton...');
  return <button onClick={onClick}>Increment Count</button>;
});

// Separate example of useCallback
const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoized increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>useCallback Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

export { Parent };
export default UseCallbackExample;
