import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-8">Page Not Found</h2>
        <p className="mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
}