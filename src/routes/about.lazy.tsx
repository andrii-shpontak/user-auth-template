import { AbsoluteRoutes } from '../shared/enums';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute(AbsoluteRoutes.About)({
  component: About,
});

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
