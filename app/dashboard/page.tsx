'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push('/login');
      } else {
        setUserEmail(session.user.email || 'No email found');
      }
    };

    checkUser();
  }, [router]);

  return (
    <>
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      <p className="mt-2 text-gray-600">Logged in as: {userEmail}</p>
        <div className="mt-4">
            <button
            onClick={() => supabase.auth.signOut().then(() => router.push('/login'))}
            className="bg-red-600 text-white px-4 py-2 rounded"
            >
            Logout
            </button>
        </div>    
    </div>
    </>
  );
}
