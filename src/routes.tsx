import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { NotFound } from "./pages/404";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Orders } from "./pages/app/orders/orders";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { RegisterProfessional } from "./pages/app/register-professional";
import { AvaliableBarberShop } from "./pages/app/barber-avaliable";

// Custom ProtectedRoute component
const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  // Add your authentication logic here (e.g., checking for a token)
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    element
  ) : (
    <Navigate
      to="/sign-in"
      replace={true}
      state={{ from: window.location.pathname }}
    />
  );
};

// Define your routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={<Dashboard />} />,
      },
      {
        path: "/orders",
        element: <ProtectedRoute element={<Orders />} />,
      },
      {
        path: "/add-professional",
        element: <ProtectedRoute element={<RegisterProfessional />} />,
      },
      {
        path: "/avaliable",
        element: <ProtectedRoute element={<AvaliableBarberShop />} />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
