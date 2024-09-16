import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ProtectedRoute } from '../ProtectedRoute';
import { useAuth } from '../../../core/auth/useAuth';

vi.mock('../../../core/auth/useAuth', () => ({
  useAuth: vi.fn(),
}));

vi.mock('@tanstack/react-router', () => ({
  Navigate: () => null,
  useRouter: () => ({
    navigate: vi.fn(),
  }),
}));

describe('ProtectedRoute', () => {
  it('renders Loader when isLoading is true', () => {
    (useAuth as jest.Mock).mockReturnValue({
      authState: undefined,
      isLoading: true,
    });

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders Loader when authState is undefined', () => {
    (useAuth as jest.Mock).mockReturnValue({
      authState: undefined,
      handleLogin: vi.fn(),
      handleLogout: vi.fn(),
      isLoading: false,
    });

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('navigates to /login when authState is not authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({
      authState: { isAuthenticated: false, token: null },
      isLoading: false,
    });

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>,
    );

    expect(screen.queryByText('Protected Content')).toBeNull();
  });

  it('renders children when authState is authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({
      authState: { isAuthenticated: true, token: 'token' },
      isLoading: false,
    });

    render(
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>,
    );

    expect(screen.getByText('Protected Content')).toBeInTheDocument();
  });
});
