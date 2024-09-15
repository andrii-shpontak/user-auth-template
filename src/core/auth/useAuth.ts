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

  useEffect(() => {
    const subscription = authService.getAuthState().subscribe(state => {
      setAuthState(state);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [authService]);

  return authState;
};
