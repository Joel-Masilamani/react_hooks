import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './navbar';
import Login from './login';
import Dashboard from './dashboard';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Login />
      <Dashboard />
    </AuthProvider>
  );
}

export default App;