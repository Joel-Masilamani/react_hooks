import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Dashboard = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) return null;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>User Dashboard</h2>
      <p>Secure content is now visible.</p>
      <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
    </div>
  );
};
      