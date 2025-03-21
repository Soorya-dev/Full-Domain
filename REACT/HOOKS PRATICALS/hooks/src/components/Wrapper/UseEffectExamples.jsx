import React from 'react';
import { TitleUpdate, FetchData, WindowResize, CleanupExample } from '../UseEffect';

const UseEffectExamples = () => {
  return (
    <div>
      <h2>useEffect Examples</h2>
      <TitleUpdate />
      <FetchData />
      <WindowResize />
      <CleanupExample />
    </div>
  );
};

export default UseEffectExamples;
