import { Outlet, createRootRoute } from '@tanstack/react-router';

import { Layout } from '../shared/components';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  ),
});
