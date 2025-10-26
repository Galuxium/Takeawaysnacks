// Import necessary modules from 'clerk-react'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/clerk-react';

// Define the interface for SignInPageProps
interface SignInPageProps {
  children?: never;
}

// Define the SignInPage component
const SignInPage: React.FC<SignInPageProps> = () => {
  // Use the useUser hook to get user information
  const { isSignedIn, isLoading } = useUser();

  // If the user is loading or signed in, redirect to the home page
  if (isLoading || isSignedIn) {
    return <RedirectToSignIn />;
  }

  // Return the sign-in page
  return (
    <div>
      <h1>Sign In</h1>
      <SignedOut>
        <p>Please sign in to continue.</p>
      </SignedOut>
      <SignedIn>
        <p>You are already signed in.</p>
      </SignedIn>
    </div>
  );
};

// Define the interface for AppProps
interface AppProps {
  children: React.ReactNode;
}

// Define the App component
const App: React.FC<AppProps> = ({ children }) => {
  // Return the ClerkProvider wrapping the children
  return (
    <ClerkProvider frontendApi="your-frontend-api">
      <SignInPage />
      {children}
    </ClerkProvider>
  );
};

export default App;