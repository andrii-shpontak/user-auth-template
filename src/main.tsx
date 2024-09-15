import './index.css';
import '@radix-ui/themes/styles.css';
import 'reflect-metadata';

import { RouterProvider, createRouter } from '@tanstack/react-router';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
