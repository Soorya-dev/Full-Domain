import { useState } from 'react';

//! Color Toggle Example
const UseState = () => {
  const [colour, setColour] = useState('red');

  const changeColor = () => {
    setColour((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
  };

  return (
    <>
      <h1>My favorite color is <span style={{ color: colour }}>{colour}</span></h1>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export { UseState };

//! Counter Example
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export { Counter };

//! Toggle Text Visibility Example
const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h1>{isVisible ? "Hello, World!" : ""}</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
    </>
  );
};

export { ToggleText };

//! Input Binding Example
const InputBinding = () => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </>
  );
};

export { InputBinding };

//! Background Color Toggle Example
const BackgroundColor = () => {
  const [bgColor, setBgColor] = useState('white');

  const changeBackground = () => {
    setBgColor((prev) => (prev === 'white' ? 'lightblue' : 'white'));
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', textAlign: 'center' }}>
      <h1>The background color is {bgColor}</h1>
      <button onClick={changeBackground}>Toggle Background</button>
    </div>
  );
};

export { BackgroundColor };

//! Checkbox Example
const CheckboxExample = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={() => setIsChecked1(!isChecked1)}
        />
        Checkbox 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => setIsChecked2(!isChecked2)}
        />
        Checkbox 2
      </label>
      <p>
        Checkbox 1 is {isChecked1 ? "checked" : "unchecked"}.
        <br />
        Checkbox 2 is {isChecked2 ? "checked" : "unchecked"}.
      </p>
    </>
  );
};

export { CheckboxExample };

//! User Profile Example
const UserProfile = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  const updateName = (e) => setUser({ ...user, name: e.target.value });
  const updateAge = (e) => setUser({ ...user, age: e.target.value });

  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        value={user.name}
        onChange={updateName}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={user.age}
        onChange={updateAge}
      />
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </>
  );
};

export { UserProfile };
