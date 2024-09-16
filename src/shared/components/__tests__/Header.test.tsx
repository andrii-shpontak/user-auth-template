import { RouterProvider, createRouter } from '@tanstack/react-router';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { routeTree } from '../../../routeTree.gen';
import { useAuth } from '../../../core/auth/useAuth';

vi.mock('../../../core/auth/useAuth.ts', () => ({
  useAuth: vi.fn(),
}));

const router = createRouter({ routeTree });

describe('Header', () => {
  it('renders links and login button when not authenticated', async () => {
    (useAuth as jest.Mock).mockReturnValue({
      authState: { isAuthenticated: false },
      handleLogout: vi.fn(),
    });

    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders links and logout button when authenticated', async () => {
    (useAuth as jest.Mock).mockReturnValue({
      authState: { isAuthenticated: true },
      handleLogout: vi.fn(),
    });

    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('calls handleLogout when logout button is clicked', async () => {
    const mockLogout = vi.fn();
    (useAuth as jest.Mock).mockReturnValue({
      authState: { isAuthenticated: true },
      handleLogout: mockLogout,
    });

    await act(async () => {
      render(<RouterProvider router={router} />);
    });

    const logoutButton = screen.getByText('Logout');
    await act(async () => {
      fireEvent.click(logoutButton);
    });

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
