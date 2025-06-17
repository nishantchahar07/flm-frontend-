'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

export default function AuthPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-50 to-white">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                        <Image
                            width={32}
                            height={32}
                            unoptimized
                            fetchPriority='high'
                            loading='eager'
                            src="/logo.svg"
                            alt="FET Logo"
                            className="h-8 w-8"
                        />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">Welcome Back!</h2>
                    <p className="text-gray-500 text-sm text-center">
                        Enter your designated credentials below to continue into <span className="font-medium">FET</span>
                    </p>
                </div>

                <div className="mt-6">
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
                        <FaGoogle className="text-red-500" />
                        <span className="text-sm font-medium">Continue with Google</span>
                    </button>

                    <div className="my-4 flex items-center justify-between">
                        <hr className="w-full border-gray-300" />
                        <span className="text-sm text-gray-400 px-2">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>

                    <form className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-2.5 text-gray-400 text-sm"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        <button className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-lg hover:bg-yellow-500 transition">
                            Login
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        Don’t have credentials? Contact your administrator for login access.
                    </p>
                </div>
            </div>
        </div>
    );
}
