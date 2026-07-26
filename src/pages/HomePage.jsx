import React from "react";
import { NavLink } from "react-router";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RefreshCcw,
  Heart,
  Headphones,
  Laptop,
  Watch,
  Smartphone,
} from "lucide-react";

const HomePage = () => {
  const categories = [
    {
      name: "Electronics",
      description: "Latest gadgets & tech",
      icon: Laptop,
    },
    {
      name: "Smartphones",
      description: "Stay connected",
      icon: Smartphone,
    },
    {
      name: "Accessories",
      description: "Complete your setup",
      icon: Headphones,
    },
    {
      name: "Wearables",
      description: "Tech on the go",
      icon: Watch,
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery",
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description: "Shop with confidence",
    },
    {
      icon: RefreshCcw,
      title: "Easy Returns",
      description: "Simple return process",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-violet-100">
        {/* Decorative backgrounds */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl" />

        <div className="relative mx-auto grid min-h-155 max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
              <ShoppingBag size={16} />
              Welcome to MiniStore
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Everything you need,
              <span className="block text-indigo-600">
                all in one place.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              Discover quality products selected for your everyday life.
              Simple shopping, great products, and a smooth experience.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <NavLink
                to="/products"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 sm:w-auto"
              >
                Shop Products
                <ArrowRight size={18} />
              </NavLink>

              <NavLink
                to="/wishlist"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 sm:w-auto"
              >
                <Heart size={18} />
                My Wishlist
              </NavLink>
            </div>

            {/* Small Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-indigo-100 pt-7 lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-slate-900">100+</p>
                <p className="text-sm text-slate-500">Products</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">20+</p>
                <p className="text-sm text-slate-500">Categories</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-500">Shopping</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-4xl border border-indigo-100 bg-white/80 p-5 shadow-2xl shadow-indigo-200/50 backdrop-blur">

              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Featured Collection
                  </p>
                  <h2 className="text-xl font-bold text-slate-900">
                    Trending Products
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <ShoppingBag size={21} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex min-h-40 flex-col justify-between rounded-2xl bg-indigo-50 p-5">
                  <Headphones
                    size={42}
                    className="text-indigo-500"
                  />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Audio
                    </p>
                    <p className="text-xs text-slate-500">
                      Explore collection
                    </p>
                  </div>
                </div>

                <div className="flex min-h-40 flex-col justify-between rounded-2xl bg-violet-50 p-5">
                  <Smartphone
                    size={42}
                    className="text-violet-500"
                  />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Smartphones
                    </p>
                    <p className="text-xs text-slate-500">
                      Latest devices
                    </p>
                  </div>
                </div>

                <div className="col-span-2 flex items-center justify-between rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 p-5 text-white">
                  <div>
                    <p className="text-sm text-indigo-100">
                      Explore MiniStore
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                      Find your next favorite product
                    </p>
                  </div>

                  <NavLink
                    to="/products"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                  >
                    <ArrowRight size={19} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Categories
          </p>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Shop by category
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Explore different categories and find exactly what you're
            looking for.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <NavLink
                key={category.name}
                to="/products"
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {category.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-indigo-600">
                  Explore
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>

      {/* ================= PROMO ================= */}
      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 to-violet-600">
          <div className="flex flex-col items-center justify-between gap-8 px-6 py-12 text-center sm:px-10 lg:flex-row lg:px-14 lg:text-left">

            <div>
              <p className="mb-2 text-sm font-medium text-indigo-100">
                Discover something new
              </p>

              <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">
                Great products are just one click away.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-indigo-100 sm:text-base">
                Browse our product collection and add your favorites
                to your cart or wishlist.
              </p>
            </div>

            <NavLink
              to="/products"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Browse Products
              <ArrowRight size={18} />
            </NavLink>

          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-10">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center justify-center gap-4 md:justify-start"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
};

export default HomePage;