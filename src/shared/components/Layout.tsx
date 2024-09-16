import { Box, Theme } from '@radix-ui/themes';

import { Header } from './Header';
import type { IProtectedRouteProps } from '../types';
import Loader from './Loader';
import React from 'react';
import { layoutRadixColors } from '../constants';
import { useAuth } from '../../core/auth/useAuth';

export const Layout: React.FC<IProtectedRouteProps> = ({ children }) => {
  const { isLoading } = useAuth();

  return (
    <Theme accentColor='yellow'>
      <Box className='min-h-screen'>
        <Header />
        <main
          style={layoutRadixColors}
          className='flex flex-col items-center justify-center py-6 px-4 h-[calc(100vh-3rem)]'>
          {/* {isLoading ? */}
          <Loader />
          {/* : children} */}
        </main>
      </Box>
    </Theme>
  );
};
