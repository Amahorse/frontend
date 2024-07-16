import React  from 'react';
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

// Containers
const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'))

export const ProtectedRoute = () => {

    const token = useAuth();
  
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/" />;
    }
  
    // If authenticated, render the child routes
    return <DefaultLayout />;
  };
