import { Navigate, useNavigate } from '@tanstack/react-router';

import { AbsoluteRoutes } from '../enums';
import type { IProtectedRouteProps } from '../types';
import React from 'react';
import { useAuth } from '../../core/auth/useAuth';

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  if (!authState.isAuthenticated) {
    return <Navigate to={AbsoluteRoutes.Login} />;
  }

  return <>{children}</>;
};
