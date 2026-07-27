import React, { useState } from "react";
import { NavLink } from "react-router";
import {
  Heart,
  ShoppingCart,
  UserRound,
  Store,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const { currentUser, isLoggedIn } = useSelector((state) => state.auth);

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const wishlistCount = wishlistItems.length;

  const navClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"
    }`;

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("loggedInUser");
    setMenuOpen(false);
    toast.success("Logout successful");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
            <Store size={21} />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            Mini<span className="text-indigo-600">Store</span>
          </span>
        </NavLink>

        {/* desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {/* wishlist */}
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `relative flex h-10 w-10 items-center justify-center rounded-xl transition ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`
            }
            aria-label="Wishlist"
          >
            <Heart size={21} />

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex h-10 w-10 items-center justify-center rounded-xl transition ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`
            }
            aria-label="Cart"
          >
            <ShoppingCart size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </NavLink>

          <div className="mx-2 h-7 w-px bg-slate-200" />

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <UserRound size={17} />
                </div>

                <div className="hidden lg:block">
                  <p className="text-[11px] leading-none text-slate-400">
                    Welcome
                  </p>

                  <p className="mt-1 max-w-24 truncate text-sm font-semibold text-slate-700">
                    {currentUser.name}
                  </p>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
              >
                <LogOut size={17} />
                <span className="hidden lg:inline">Logout</span>
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700"
            >
              <UserRound size={17} />
              Login / Sign Up
            </NavLink>
          )}
        </div>
          {/* mobile menu  */}
        <div className="flex items-center gap-1 md:hidden">
          <NavLink
            to="/wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            aria-label="Wishlist"
          >
            <Heart size={20} />

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              Products
            </NavLink>

            <div className="my-2 h-px bg-slate-100" />

            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <UserRound size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Signed in as</p>

                    <p className="truncate text-sm font-semibold text-slate-800">
                      {currentUser.name}
                    </p>

                    <p className="truncate text-xs text-slate-500">
                      {currentUser.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-red-100 px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                <UserRound size={17} />
                Login / Sign Up
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
