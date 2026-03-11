import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { state } = useContext(AuthContext);
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      {state.isLoggedIn ? `Welcome, ${state.user.name}!` : 'Please Login'}
    </nav>
  );
};
export default Navbar