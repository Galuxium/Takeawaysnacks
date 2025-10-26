// layout.tsx

import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ClerkProvider frontendApi="your-clerk-frontend-api">
      <div className="flex">
        <Navigation />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </ClerkProvider>
  );
};

export default Layout;