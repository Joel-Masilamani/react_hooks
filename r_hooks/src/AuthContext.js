import React, { createContext, useReducer } from 'react';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: true, user: { name: action.payload } };
    case 'LOGOUT':
      return { isLoggedIn: false, user: null };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
