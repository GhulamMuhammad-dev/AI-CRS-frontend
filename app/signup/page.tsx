'use client';
import { useState } from 'react';
import { signup } from '@/lib/auth';
import OAuthButtons from '@/components/OAuthButtons';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const res = await signup(email, password);
    if (res.token) {
      localStorage.setItem('token', res.token);
      alert('Signed up successfully!');
    } else {
      alert(res.error);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Signup</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignup}
        className="bg-blue-600 text-white px-4 py-2 w-full"
      >
        Sign Up
      </button>

      <OAuthButtons />
    </div>
  );
}
