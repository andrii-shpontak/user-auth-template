import { type ReactNode } from 'react';

export interface IAuthState {
  isAuthenticated: boolean;
  token: string | null;
}

export interface IProtectedRouteProps {
  children: ReactNode;
}
