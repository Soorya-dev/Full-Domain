import React, { useEffect, useState } from 'react';

// //! Example 1: Title Update on Count Change
const TitleUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`; // Update title on count change
  }, [count]); // Re-run effect whenever count changes

  return (
    <>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  );
};

// //! Example 2: Fetching Data (Simulating API Call)
const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating a fetch request
    const fetchData = () => {
      setTimeout(() => {
        setData({ message: 'Data fetched successfully!' });
      }, 2000);
    };

    fetchData();
  }, []); // Empty array to only run once on mount

  return (
    <>
      <h1>{data ? data.message : 'Loading data...'}</h1>
    </>
  );
};

// //! Example 3: Window Resize Listener
const WindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize); // Listen for window resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []); // Run only once on mount

  return (
    <>
      <h1>Window size: {windowSize.width} x {windowSize.height}</h1>
    </>
  );
};

// //! Example 4: Component Cleanup Example
const CleanupExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup the timer when component unmounts
    return () => clearInterval(timer);
  }, []); // Run only once on mount

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
};

// Exporting all the components
export { TitleUpdate, FetchData, WindowResize, CleanupExample };

