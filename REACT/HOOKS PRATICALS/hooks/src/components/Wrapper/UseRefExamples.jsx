import React from 'react';
import UseRef, { InputRef, TimerExample, ScrollToElement, PreviousValueExample, FocusInput } from '../UseRef.jsx';

const UseRefExamples = () => {
    return (
        <div>
            <h2>useRef Examples</h2>
            <UseRef />
            <InputRef />
            <TimerExample />
            <ScrollToElement />
            <PreviousValueExample />
            <FocusInput />
        </div>
    );
};

export default UseRefExamples;
