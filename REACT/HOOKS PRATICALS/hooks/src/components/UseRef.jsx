import React, { useEffect, useRef, useState } from 'react';

// Example 1: Tracking Render Count
const UseRef = () => {
    const [value, setValue] = useState(0);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <>
            <button onClick={() => setValue(value + 1)}>Increase</button>
            <h1>I rendered {renderCount.current} times</h1>
        </>
    );
};

// Example 2: Input Reference
const InputRef = () => {
    const inputRef = useRef(null);

    const updateRef = () => {
        alert(inputRef.current.value);
    };

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={updateRef}>Show Value</button>
        </>
    );
};

// Example 3: Preserving State Without Triggering Re-Render
const TimerExample = () => {
    const timerId = useRef(null);
    const [count, setCount] = useState(0);

    const startTimer = () => {
        if (!timerId.current) {
            timerId.current = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = null;
    };

    return (
        <>
            <h1>Timer: {count}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </>
    );
};

// Example 4: Scroll to Element
const ScrollToElement = () => {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <button onClick={scrollToSection}>Scroll to Section</button>
            <div style={{ height: '100vh' }}>Scroll Down</div>
            <div ref={sectionRef} style={{ height: '100vh', backgroundColor: 'lightblue' }}>
                Target Section
            </div>
        </>
    );
};

// Example 5: Persist Previous Value
const PreviousValueExample = () => {
    const [value, setValue] = useState('');
    const prevValue = useRef('');

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type something..."
            />
            <p>Current Value: {value}</p>
            <p>Previous Value: {prevValue.current}</p>
        </>
    );
};

// Example 6: Focus Input on Button Click
const FocusInput = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputRef} placeholder="Click the button to focus me" />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
};




const ReviewUseRef = () => {
    const inpurRef=useRef()
    console.log(inpurRef)
  return (
    <div>
<input type="text" ref={inpurRef} />

    </div>
  )
}


export default UseRef;
export { InputRef, TimerExample, ScrollToElement, PreviousValueExample, FocusInput,ReviewUseRef };
