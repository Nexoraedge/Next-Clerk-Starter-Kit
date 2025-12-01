"use client"; // 🔴 CRITICAL: Hooks like useUser need this in Next.js

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex justify-between p-4 border-b">
            <Link href="/">APP NAME</Link>

            <div>
                {/* 🟢 Option A: Shown when user is LOGGED OUT */}
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="px-4 py-2 bg-zinc-600 rounded text-white">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>

                {/* 🟢 Option B: Shown when user is LOGGED IN */}
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </nav>
    )
}