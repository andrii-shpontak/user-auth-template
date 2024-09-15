import { useEffect, useState } from 'react';

import { AuthService } from './authService';
import type { IAuthState } from '../../shared/types';
import { container } from 'tsyringe';

export const useAuth = () => {
  const [authState, setAuthState] = useState<IAuthState>({
    isAuthenticated: false,
    token: null,
  });

  const authService = container.resolve(AuthService);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    const values = Object.fromEntries(new FormData(e.currentTarget));
    e.preventDefault();
    if (values.email && values.password) {
      authService.login(JSON.stringify(values));
    }
  };

  const handleLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    const subscription = authService.getAuthState().subscribe(state => {
      setAuthState(state);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [authService]);

  return { authState, handleLogin, handleLogout };
};
