import { AbsoluteRoutes } from '../shared/enums';
import { LoginForm } from '../pages/LoginForm';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute(AbsoluteRoutes.Login)({
  component: LoginForm,
});
