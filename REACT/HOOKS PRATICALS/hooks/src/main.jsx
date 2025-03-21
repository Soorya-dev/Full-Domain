import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseStateExamples from './components/Wrapper/UseStateExamples.jsx';
import UseEffectExamples from './components/Wrapper/UseEffectExamples.jsx';
import UseRefExamples from './components/Wrapper/UseRefExamples.jsx';
import UseMemo from './components/UseMemo.jsx';
import UseMemoExamples from './components/Wrapper/UseMemoExamples.jsx';
import UseCallbackExamples from './components/Wrapper/UseCallbackExamples.jsx';
import UseContextExamples from './components/Wrapper/UseContextExamples.jsx';
import UseReducerExamples from './components/Wrapper/UseReducerExamples.jsx';  // Import UseReducerExamples

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Uncomment the components you want to render */}
    {/* <UseStateExamples /> */}
    {/* <UseEffectExamples /> */}
    {/* <UseRefExamples /> */}
    <UseMemoExamples />
    {/* <UseCallbackExamples /> */}
    {/* <UseContextExamples /> */}
    <UseReducerExamples /> Render the UseReducerExamples component
  </StrictMode>
);
