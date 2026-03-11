import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (state.isLoggedIn) return null;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => dispatch({ type: 'LOGIN', payload: 'Joel' })}>
        Login as Joel
      </button>
    </div>
  );
};

export default Login