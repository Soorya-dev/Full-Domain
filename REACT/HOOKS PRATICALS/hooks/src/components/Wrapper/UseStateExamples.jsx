import React from 'react';
import { UseState, Counter, ToggleText, InputBinding, BackgroundColor, CheckboxExample, UserProfile } from '../../components/UseState';

const UseStateExamples = () => {
  return (
    <div>
      <h2>useState Hook Examples</h2>
      
      <h3>1. Color Toggle</h3>
      <UseState />

      <h3>2. Counter</h3>
      <Counter />

      <h3>3. Toggle Text Visibility</h3>
      <ToggleText />

      <h3>4. Input Binding</h3>
      <InputBinding />

      <h3>5. Background Color Toggle</h3>
      <BackgroundColor />

      <h3>6. Checkbox Example</h3>
      <CheckboxExample />

      <h3>7. User Profile</h3>
      <UserProfile />
    </div>
  );
};

export default UseStateExamples;
