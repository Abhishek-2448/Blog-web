import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://back-m7dh.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
        location.reload();
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <div className=" flex items-center justify-center bg-antiquewhite">
      <div className="bg-white px-10 py-8 rounded-xl shadow-lg w-full ">
        <h2 className="text-3xl font-extrabold text-center text-red-500 mb-6">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Use <span className="font-medium text-gray-700">Abhishek@gmail.com</span> / <span className="font-medium text-gray-700">password</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
