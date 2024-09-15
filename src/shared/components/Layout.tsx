import { Box, Theme } from '@radix-ui/themes';

import { Header } from './Header';
import { ReactNode } from 'react';
import { layoutRadixColors } from '../constants';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Theme accentColor='cyan'>
      <Box className='min-h-screen '>
        <Header />
        <main style={layoutRadixColors} className='flex flex-col items-center justify-center py-6 px-4'>
          {children}
        </main>
      </Box>
    </Theme>
  );
}
