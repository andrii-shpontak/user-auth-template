import { useEffect, useState } from 'react';

import { AuthService } from './authService';
import type { IAuthState } from '../../shared/types';
import { container } from 'tsyringe';
import { useNavigate } from '@tanstack/react-router';

export const useAuth = () => {
  const [authState, setAuthState] = useState<IAuthState | undefined>();
  const navigate = useNavigate();

  const authService = container.resolve(AuthService);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    if (values.email && values.password) {
      await authService.login(JSON.stringify(values));
      navigate({ to: '/about' });
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
  }, []);

  return { authState, handleLogin, handleLogout };
};
