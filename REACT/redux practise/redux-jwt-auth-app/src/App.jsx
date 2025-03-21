// /src/App.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      {token ? <Dashboard /> : <Login />}
    </div>
  );
};

export default App;
