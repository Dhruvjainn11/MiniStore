import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  UserPlus,
  Eye,
  EyeOff,
  Store,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { NavLink } from "react-router";
import useAuthHook from "../hooks/useAuthHook";

const Register = () => {
  const { register, handleSubmit, errors, RegisterFormHandler } = useAuthHook();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-linear-to-br from-indigo-50 via-white to-violet-100 px-4 py-12">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl" />

      <div className="relative w-full max-w-md rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-xl shadow-indigo-100/60 backdrop-blur sm:p-8">
        <div className="mb-7 text-center">
          <NavLink
            to="/"
            className="mx-auto mb-5 inline-flex items-center gap-2"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
              <Store size={21} />
            </div>

            <span className="text-xl font-bold text-slate-900">
              Mini<span className="text-indigo-600">Store</span>
            </span>
          </NavLink>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Join MiniStore and start shopping today
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(RegisterFormHandler)}
          className="space-y-5"
        >
          {/* name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className={`w-full rounded-xl border bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 ${
                  errors.name
                    ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                    : "border-slate-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                }`}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
            </div>

            {errors.name && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className={`w-full rounded-xl border bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                    : "border-slate-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>

            {errors.email && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className={`w-full rounded-xl border bg-white py-3 pl-11 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 ${
                  errors.password
                    ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                    : "border-slate-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-indigo-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2.5 text-xs text-indigo-700">
            <ShieldCheck size={16} className="shrink-0" />

            <span>Create your account to access checkout and more.</span>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition duration-200 hover:bg-indigo-700 active:scale-[0.99]"
          >
            <UserPlus size={18} />
            Create Account
            <ArrowRight size={17} />
          </button>
        </form>

        <div className="mt-7 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
