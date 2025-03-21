import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice.js';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log('Login attempt started'); // Debug: Triggered when login starts
    console.log('Email:', email, 'Password:', password); // Debug: Log input values

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log('API Response:', response.data); // Debug: Log the full API response

      const token = response.data.token; // Extract token from the response
      const user = { email }; // Example: Use real user data from API if available

      dispatch(login({ user, token })); // Dispatch action to Redux store
      console.log('Login successful:', { user, token }); // Debug: Log success data
    } catch (error) {
      console.error('Login failed:', error); // Debug: Log any errors from the API
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update email state
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update password state
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
