import React from "react";
import { NavLink } from "react-router";
import {
  Home,
  ShoppingBag,
  ArrowLeft,
  SearchX,
} from "lucide-react";

const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden bg-slate-50 px-5 py-16">

      {/* Background decoration */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
          <SearchX size={36} />
        </div>

        {/* 404 */}
        <div className="mt-7">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Page not found
          </p>

          <h1 className="mt-3 text-7xl font-black tracking-tight text-slate-900 sm:text-8xl">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
          Looks like this page went shopping.
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
          The page you're looking for doesn't exist or may have been moved.
          You can return home or continue exploring MiniStore.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <NavLink
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Home size={18} />
            Back to Home
          </NavLink>

          <NavLink
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            <ShoppingBag size={18} />
            Browse Products
          </NavLink>

        </div>

        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="mx-auto mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-indigo-600"
        >
          <ArrowLeft size={15} />
          Go back
        </button>

      </div>
    </main>
  );
};

export default NotFoundPage;