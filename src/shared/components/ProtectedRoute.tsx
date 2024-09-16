import type { IProtectedRouteProps } from '../types';
import Loader from './Loader';
import { Navigate } from '@tanstack/react-router';
import React from 'react';
import { useAuth } from '../../core/auth/useAuth';

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  const { authState, isLoading } = useAuth();

  if (isLoading || !authState) {
    return <Loader />;
  }

  if (!authState?.isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
};
