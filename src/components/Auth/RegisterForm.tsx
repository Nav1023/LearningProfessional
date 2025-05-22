import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';

interface RegisterFormProps {
  onRegisterSuccess?: () => void; // Callback for successful registration
  onSwitchToLogin?: () => void;   // Callback to switch to login modal
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegisterSuccess, onSwitchToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!fullName || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }
    if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Registration attempt:', { fullName, email, password });
    // Mock registration logic
    // alert('Registration successful (mock)! Please login.'); // Replaced by callback
    if (onRegisterSuccess) {
      onRegisterSuccess(); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-sm text-red-600 text-center p-2 bg-red-100 rounded-md">{error}</p>}
      <div>
        <label htmlFor="fullName-register" className="block text-sm font-medium text-gray-700">
          Full name
        </label>
        <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
          <div className="px-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="fullName-register"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className="block w-full py-2 border-0 focus:ring-0 sm:text-sm placeholder-gray-400 bg-transparent"
            placeholder="Your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email-register-form" className="block text-sm font-medium text-gray-700"> 
          Email address
        </label>
        <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
           <div className="px-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="email-register-form"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full py-2 border-0 focus:ring-0 sm:text-sm placeholder-gray-400 bg-transparent"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password-register-form" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
          <div className="px-3 pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="password-register-form"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="block w-full py-2 border-0 focus:ring-0 sm:text-sm placeholder-gray-400 bg-transparent"
            placeholder="Password (min. 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="confirm-password-register" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
          <div className="px-3 pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="confirm-password-register"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="block w-full py-2 border-0 focus:ring-0 sm:text-sm placeholder-gray-400 bg-transparent"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Sign up
        </button>
      </div>
      {onSwitchToLogin && (
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button type="button" onClick={onSwitchToLogin} className="font-medium text-green-600 hover:text-green-500">
            Sign in
          </button>
        </p>
      )}
    </form>
  );
};

export default RegisterForm; 