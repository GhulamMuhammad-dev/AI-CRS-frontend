// app/page.tsx
'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <Link href="/login" className="text-blue-600 underline">Login</Link>
      <Link href="/signup" className="text-blue-600 underline mt-2">Signup</Link>
    </main>
  )
}
