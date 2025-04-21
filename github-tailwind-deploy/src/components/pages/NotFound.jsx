import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link 
          to="/"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}