import React from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  isAuthenticated: boolean;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated,
  user,
  onLogin,
  onLogout,
}) => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">CarRental</h1>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user?.name}</span>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={onLogin}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <LogIn size={18} />
            Login
          </button>
        )}
      </div>
    </div>
  </nav>
);
