import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

interface LoginFormProps {
  onLoginSuccess?: () => void; // Callback for successful login
  onSwitchToRegister?: () => void; // Callback to switch to register modal
  onForgotPassword?: () => void; // Callback for forgot password
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess, onSwitchToRegister, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  // const navigate = useNavigate(); // Still might be needed for forgot password navigation if it remains a page

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(''); 

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }

    console.log('Login attempt:', { email, password, rememberMe });
    // Mock login
    // alert('Login successful (mock)!'); // Replaced by callback
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-sm text-red-600 text-center p-2 bg-red-100 rounded-md">{error}</p>}
      <div>
        <label htmlFor="email-login" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
          <div className="px-3 pointer-events-none"> 
            <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="email-login" 
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
        <label htmlFor="password-login" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
          <div className="px-3 pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="password-login" 
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full py-2 border-0 focus:ring-0 sm:text-sm placeholder-gray-400 bg-transparent"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me-login" // Changed ID
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me-login" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <button 
            type="button" 
            onClick={onForgotPassword} 
            className="font-medium text-green-600 hover:text-green-500"
          >
            Forgot your password?
          </button>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
        >
          Sign in
        </button>
      </div>
      {onSwitchToRegister && (
        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member?{' '}
          <button type="button" onClick={onSwitchToRegister} className="font-medium text-green-600 hover:text-green-500">
            Sign up now
          </button>
        </p>
      )}
    </form>
  );
};

export default LoginForm; 