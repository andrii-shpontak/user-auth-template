import { MockedFunction, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Layout } from '../Layout';
import { useAuth } from '../../../core/auth/useAuth';

vi.mock('../../../core/auth/useAuth', () => ({
  useAuth: vi.fn(),
}));

vi.mock('../Loader', () => ({
  default: () => <div>Loading...</div>,
}));

vi.mock('../Header', () => ({
  Header: () => <div>Header</div>,
}));

describe('Layout', () => {
  it('renders Header and children when isLoading is false', () => {
    (useAuth as MockedFunction<typeof useAuth>).mockReturnValue({
      authState: { isAuthenticated: false, token: null },
      handleLogin: vi.fn(),
      handleLogout: vi.fn(),
      isLoading: false,
    });

    render(
      <Layout>
        <div>Child Component</div>
      </Layout>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('renders Loader when isLoading is true', () => {
    (useAuth as MockedFunction<typeof useAuth>).mockReturnValue({
      authState: { isAuthenticated: false, token: null },
      handleLogin: vi.fn(),
      handleLogout: vi.fn(),
      isLoading: true,
    });

    render(
      <Layout>
        <div>Child Component</div>
      </Layout>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByText('Child Component')).not.toBeInTheDocument();
  });
});
