"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import authenticate from './functions/fbLogin';

const encodeData = (data: string) => btoa(data); // Encode function using Base64
const decodeData = (data: string) => atob(data); // Decode function using Base64

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Check if the user is already logged in
  useEffect(() => {
    const encodedUser = localStorage.getItem('user');
    if (encodedUser) {
      try {
        const decodedUser = JSON.parse(decodeData(encodedUser));
        if (decodedUser) {
          router.push('/dashboard');
        }
      } catch (err) {
        console.error('Failed to decode user data from localStorage:', err);
      }
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const auth = await authenticate(username, password, () => {
        // Save encoded user info in localStorage upon successful login
        const encodedUser = encodeData(JSON.stringify(auth));
        localStorage.setItem('user', encodedUser);
        router.push('/dashboard');
      });

      if ('code' in auth && 'message' in auth) {
        // If auth is an error object, set the error message
        setError(`${auth.code}: ${auth.message}`);
      }
    } catch (err) {
      // Handle any unexpected errors
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
