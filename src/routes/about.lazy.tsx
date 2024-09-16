import About from '../pages/About';
import { AbsoluteRoutes } from '../shared/enums';
import { ProtectedRoute } from '../shared/components/ProtectedRoute';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute(AbsoluteRoutes.About)({
  component: () => (
    <ProtectedRoute>
      <About />
    </ProtectedRoute>
  ),
});
