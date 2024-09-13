import Main from '../pages/Main';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Main,
});
