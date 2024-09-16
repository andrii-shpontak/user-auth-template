import { Button, TabNav } from '@radix-ui/themes';

import { Link } from '@tanstack/react-router';
import { filledRadixColors } from '../constants';
import { useAuth } from '../../core/auth/useAuth';

export function Header() {
  const { authState, handleLogout } = useAuth();

  return (
    <header style={filledRadixColors} className='py-2 px-8 h-12 flex justify-between items-center'>
      <TabNav.Root className='flex gap-4'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>
        <Link to='/about' className='[&.active]:font-bold'>
          About
        </Link>
        {!authState?.isAuthenticated && (
          <Link to='/login' className='[&.active]:font-bold'>
            Login
          </Link>
        )}
      </TabNav.Root>
      {authState?.isAuthenticated && (
        <Button onClick={handleLogout} color='red'>
          Logout
        </Button>
      )}
    </header>
  );
}
