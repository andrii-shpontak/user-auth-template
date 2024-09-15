import { AbsoluteRoutes } from '../shared/enums';
import Main from '../pages/Main';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(AbsoluteRoutes.Home)({
  component: Main,
});
