import { Button, TabNav } from '@radix-ui/themes';

import { AuthService } from '../../core/auth/authService';
import { Link } from '@tanstack/react-router';
import { container } from 'tsyringe';
import { filledRadixColors } from '../constants';
import { useAuth } from '../../core/auth/useAuth';

export function Header() {
  const authState = useAuth();
  const authService = container.resolve(AuthService);

  const handleLogout = () => {
    authService.logout();
  };

  return (
    <header style={filledRadixColors} className='py-4 px-8 flex justify-between'>
      <TabNav.Root className='flex gap-4'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>
        <Link to='/about' className='[&.active]:font-bold'>
          About
        </Link>
        {!authState.isAuthenticated && (
          <Link to='/login' className='[&.active]:font-bold'>
            Login
          </Link>
        )}
      </TabNav.Root>
      {authState.isAuthenticated && (
        <Button onClick={handleLogout} color='gray'>
          Logout
        </Button>
      )}
    </header>
  );
}
