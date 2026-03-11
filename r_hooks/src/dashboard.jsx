import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Dashboard = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) return null;

  return (
    <div >
      <h2>User Dashboard</h2>
      <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
    </div>
  );
};

export default Dashboard