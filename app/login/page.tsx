'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Email/Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return alert(error.message);

    router.push('/dashboard');
  };

  // OAuth Login
  const loginWithProvider = async (provider: 'google' | 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });

    if (error) alert(error.message);
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-4">
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>

      <div className="flex flex-col gap-2">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => loginWithProvider('google')}
        >
          Sign in with Google
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={() => loginWithProvider('github')}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
