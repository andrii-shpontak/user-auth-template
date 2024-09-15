import React, { useState } from 'react';

import { AuthService } from '../core/auth/authService';
import { Button } from '@radix-ui/themes';
import { Navigate } from '@tanstack/react-router';
import { container } from 'tsyringe';
import { useAuth } from '../core/auth/useAuth';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authState = useAuth();
  const authService = container.resolve(AuthService);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      authService.login('mock-token');
    }
  };

  if (authState.isAuthenticated) {
    return <Navigate to='/about' />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded'>
      <h1 className='text-xl font-bold text-center'>Login</h1>

      <input
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder='Username'
        className='border p-2 rounded'
      />

      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        className='border p-2 rounded'
      />

      <Button type='submit'>Login</Button>
    </form>
  );
};
