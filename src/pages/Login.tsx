import React from 'react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Lock, User, TrendingUp } from 'lucide-react';

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-neutral-900 p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-neutral-800">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 border-2 border-primary-600 rounded-full flex items-center justify-center text-primary-600 mb-4 bg-white dark:bg-neutral-900">
            <TrendingUp size={32} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display">Client Portal</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Sign in to access your financial dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                required
                className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-sm"
                placeholder="Username or Email"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="password"
                required
                className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 dark:text-slate-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button className="w-full" size="lg">
              Sign in
            </Button>
          </div>
        </form>
        
        <div className="text-center mt-4">
            <Link to="/" className="text-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
                Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
};
