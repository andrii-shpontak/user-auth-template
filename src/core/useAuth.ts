// src/core/useAuth.ts
import { useEffect, useState } from 'react';

import type { IAuthState } from '../shared/types';
import { authService } from './authService';

export function useAuth() {
  const [authState, setAuthState] = useState<IAuthState>({ isAuthenticated: false });

  useEffect(() => {
    const subscription = authService.getAuthState().subscribe(setAuthState);
    return () => subscription.unsubscribe();
  }, []);

  return authState;
}
