import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { UserProvider, useUser } from './UserContext';

describe('UserContext', () => {
  
  // Prueba 8: Login de usuario
  it('debería hacer login correctamente', () => {
    const wrapper = ({ children }) => <UserProvider>{children}</UserProvider>;
    const { result } = renderHook(() => useUser(), { wrapper });

    act(() => {
      result.current.login('usuario@test.com');
    });

    expect(result.current.user).toBe('usuario@test.com');
    expect(result.current.isAuthenticated()).toBe(true);
  });

  // Prueba 9: Logout de usuario
  it('debería hacer logout correctamente', () => {
    const wrapper = ({ children }) => <UserProvider>{children}</UserProvider>;
    const { result } = renderHook(() => useUser(), { wrapper });

    act(() => {
      result.current.login('usuario@test.com');
      result.current.logout();
    });

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated()).toBe(false);
  });
});