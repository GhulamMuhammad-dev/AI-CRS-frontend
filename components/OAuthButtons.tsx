'use client';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://khspncjvdlymbijzbsqh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtoc3BuY2p2ZGx5bWJpanpic3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjQxNjYsImV4cCI6MjA2OTA0MDE2Nn0.QwF4xNbPf9osFlJvMUJWRtoE3Y0tkk6cs1nm1LLYmH4'
);

export default function OAuthButtons() {
  const loginWith = async (provider: 'google' | 'github') => {
    await supabase.auth.signInWithOAuth({ provider });
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <button
        onClick={() => loginWith('google')}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
      <button
        onClick={() => loginWith('github')}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
