import { useEffect, useState } from 'react';

import { AuthService } from './authService';
import type { IAuthState } from '../../shared/types';
import { container } from 'tsyringe';
import { useNavigate } from '@tanstack/react-router';

export const useAuth = () => {
  const [authState, setAuthState] = useState<IAuthState | undefined>();
  const [isLoading, setLoading] = useState<boolean>(true);
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
    const loadingSubscription = authService.getLoadingState().subscribe(loading => {
      setLoading(loading);
    });

    return () => {
      subscription.unsubscribe();
      loadingSubscription.unsubscribe();
    };
  }, []);

  return { authState, handleLogin, handleLogout, isLoading };
};
