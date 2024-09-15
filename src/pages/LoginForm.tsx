import * as Form from '@radix-ui/react-form';

import { Button, Heading, TextField } from '@radix-ui/themes';

import { AbsoluteRoutes } from '../shared/enums';
import { Navigate } from '@tanstack/react-router';
import { useAuth } from '../core/auth/useAuth';

export const LoginForm = () => {
  const { authState, handleLogin } = useAuth();

  if (authState.isAuthenticated) {
    return <Navigate to={AbsoluteRoutes.About} />;
  }

  return (
    <Form.Root onSubmit={handleLogin} className='flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 border rounded'>
      <Heading as='h2' className='text-xl font-bold text-center'>
        Login
      </Heading>

      <Form.Field name='email' className='flex flex-col'>
        <Form.Label>Email</Form.Label>
        <Form.Control asChild>
          <TextField.Root type='email' required />
        </Form.Control>
        <Form.Message className='text-red-500' match='valueMissing'>
          Please enter your email
        </Form.Message>
        <Form.Message className='text-red-500' match='typeMismatch'>
          Please provide a valid email
        </Form.Message>
      </Form.Field>

      <Form.Field name='password' className='flex flex-col'>
        <Form.Label>Password</Form.Label>
        <Form.Control asChild>
          <TextField.Root type='password' required />
        </Form.Control>
        <Form.Message className='text-red-500' match='valueMissing'>
          Please enter your password
        </Form.Message>
      </Form.Field>

      <Form.Submit asChild>
        <Button>Login</Button>
      </Form.Submit>
    </Form.Root>
  );
};
