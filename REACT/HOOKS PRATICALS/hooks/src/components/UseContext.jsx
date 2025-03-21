import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
AppContext
const UseContext = () => {
    const age=useContext(AppContext)
  return (
    <>
    <h1>AGE: {age}</h1>
    </>
  )
}





const NameContext = createContext();

const App = () => {
  const [name, setName] = useState("John");

  return (
    // Provide the name value to child components
    <NameContext.Provider value={name}>
      <div>
        <h1>My name is: {name}</h1>
        <NameDisplay />
        <button onClick={() => setName("Alice")}>Change Name</button>
      </div>
    </NameContext.Provider>
  );
};

const NameDisplay = () => {
  // Use useContext to get the name value
  const name = useContext(NameContext);
  
  return <h2>Displayed name: {name}</h2>;
};


export default UseContext
