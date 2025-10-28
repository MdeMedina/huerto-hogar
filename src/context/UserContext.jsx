import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('usuario');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (email) => {
    setUser(email);
    localStorage.setItem('usuario', email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('usuario');
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated
      }}
    >
      {children}
    </UserContext.Provider>
  );
};