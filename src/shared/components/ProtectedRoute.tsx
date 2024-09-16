import { Heading } from '@radix-ui/themes';
import type { IProtectedRouteProps } from '../types';
import { Navigate } from '@tanstack/react-router';
import React from 'react';
import { useAuth } from '../../core/auth/useAuth';

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  const { authState } = useAuth();

  if (!authState) {
    return <Heading as='h3'>Loading...</Heading>;
  }

  if (!authState.isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
};
