import { RouterProvider, createBrowserRouter } from "react-router";

import PublicLayout from "../layout/PublicLayout";
import ProtectedLayout from "../layout/ProtectedLayout";

import Login from "../components/Login";
import Register from "../components/Register";
import ProductPage from "../pages/ProductPage";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import GuestLayout from "../layout/GuestLayout";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/wishlist",
          element: <WishlistPage />,
        },

        // Guest-only routes
        {
          element: <GuestLayout />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    // Login required
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
