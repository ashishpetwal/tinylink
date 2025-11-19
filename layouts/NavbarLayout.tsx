'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarLayout({children}: {children: React.ReactNode}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            <nav className="hidden md:flex md:flex-col md:w-64 md:bg-gray-800 md:text-white">
                <div className="p-4">
                    <h1 className="text-xl font-bold">TinyLink</h1>
                </div>
                <ul className="flex-1 px-4">
                    <li className="mb-2">
                        <Link href="/" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/health" className="block py-2 px-4 rounded hover:bg-gray-700">Health</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex-1 flex flex-col">
                <header className="md:hidden bg-gray-800 text-white p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">TinyLink</h1>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                                />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <nav className="mt-4">
                            <ul>
                                <li className="mb-2">
                                    <Link href="/" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/health" className="block py-2 px-4 rounded hover:bg-gray-700">Health</Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </header>

                {/* Main Content */}
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}