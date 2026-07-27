import React from "react";
import { NavLink } from "react-router";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RefreshCcw,
  Heart,
  Smartphone,
  Sofa,
  Sparkles,
  ShoppingBasket,
  Shirt,
  CookingPot,
  Dumbbell,
  Watch,
  Package,
  SprayCan,
} from "lucide-react";

const HomePage = () => {
 const categories = [
  {
    name: "Beauty",
    description: "Makeup & beauty essentials",
    icon: Sparkles,
    style: "bg-pink-50 text-pink-600",
    hover: "group-hover:bg-pink-500",
  },
  {
    name: "Groceries",
    description: "Everyday food & essentials",
    icon: ShoppingBasket,
    style: "bg-emerald-50 text-emerald-600",
    hover: "group-hover:bg-emerald-500",
  },
  {
    name: "Furniture",
    description: "Furniture for your perfect space",
    icon: Sofa,
    style: "bg-amber-50 text-amber-600",
    hover: "group-hover:bg-amber-500",
  },
  {
    name: "Fragrances",
    description: "Discover your signature scent",
    icon: SprayCan,
    style: "bg-violet-50 text-violet-600",
    hover: "group-hover:bg-violet-500",
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

      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-violet-50">

        {/* Background Decoration */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="relative mx-auto grid min-h-155 max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

          {/* Hero Content */}
          <div className="text-center lg:text-left">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm backdrop-blur">
              <ShoppingBag size={16} />
              Your everyday marketplace
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

              One store.

              <span className="block text-indigo-600">
                Endless choices.
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              From beauty and fashion to electronics, furniture,
              groceries and more — discover everything you need
              in one simple shopping experience.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">

              <NavLink
                to="/products"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 sm:w-auto"
              >
                Start Shopping
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

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-indigo-100 pt-7 lg:justify-start">

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  100+
                </p>
                <p className="text-sm text-slate-500">
                  Products
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  20+
                </p>
                <p className="text-sm text-slate-500">
                  Categories
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">
                  24/7
                </p>
                <p className="text-sm text-slate-500">
                  Shopping
                </p>
              </div>

            </div>
          </div>

          {/* ================= HERO CATEGORY VISUAL ================= */}

          <div className="relative mx-auto w-full max-w-lg">

            <div className="rounded-4xl border border-indigo-100 bg-white/80 p-5 shadow-2xl shadow-indigo-100 backdrop-blur sm:p-6">

              {/* Header */}
              <div className="mb-5 flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    Explore MiniStore
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">
                    Something for everyone
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <ShoppingBag size={21} />
                </div>

              </div>

              {/* Category Cards */}
              <div className="grid grid-cols-2 gap-3">

                {/* Beauty */}
                <div className="group flex min-h-40 flex-col justify-between rounded-2xl bg-pink-50 p-5 transition hover:-translate-y-1">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-pink-500">
                    <Sparkles size={24} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      Beauty
                    </p>

                    <p className="text-xs text-slate-500">
                      Look & feel your best
                    </p>
                  </div>

                </div>

                {/* Electronics */}
                <div className="group flex min-h-40 flex-col justify-between rounded-2xl bg-indigo-50 p-5 transition hover:-translate-y-1">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <Smartphone size={24} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      Electronics
                    </p>

                    <p className="text-xs text-slate-500">
                      Smart everyday tech
                    </p>
                  </div>

                </div>

                {/* Furniture */}
                <div className="group flex min-h-32 flex-col justify-between rounded-2xl bg-amber-50 p-5 transition hover:-translate-y-1">

                  <Sofa
                    size={30}
                    className="text-amber-600"
                  />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Furniture
                    </p>

                    <p className="text-xs text-slate-500">
                      Style your space
                    </p>
                  </div>

                </div>

                {/* Grocery */}
                <div className="group flex min-h-32 flex-col justify-between rounded-2xl bg-emerald-50 p-5 transition hover:-translate-y-1">

                  <ShoppingBasket
                    size={30}
                    className="text-emerald-600"
                  />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Groceries
                    </p>

                    <p className="text-xs text-slate-500">
                      Everyday essentials
                    </p>
                  </div>

                </div>

              </div>

              {/* Explore All */}
              <NavLink
                to="/products"
                className="mt-3 flex items-center justify-between rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 p-5 text-white transition hover:shadow-lg hover:shadow-indigo-200"
              >

                <div>
                  <p className="text-xs text-indigo-100">
                    20+ categories available
                  </p>

                  <p className="mt-1 font-semibold">
                    Explore all products
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <ArrowRight size={19} />
                </div>

              </NavLink>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Explore
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Shop by category
            </h2>

            <p className="mt-3 max-w-xl text-slate-500">
              Whatever you're looking for, there's something
              waiting for you.
            </p>
          </div>

          <NavLink
            to="/products"
            className="flex w-fit items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View all products
            <ArrowRight size={16} />
          </NavLink>

        </div>

        {/* Category Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <NavLink
                key={category.name}
                to="/products"
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
              >

                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition duration-300 group-hover:text-white ${category.style} ${category.hover}`}
                >
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

      {/* ================= COLLECTION BANNER ================= */}

      <section className="px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 via-indigo-600 to-violet-600">

          <div className="relative flex flex-col items-center justify-between gap-8 px-6 py-12 text-center sm:px-10 lg:flex-row lg:px-14 lg:text-left">

            <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 opacity-10 lg:block">
              <Package size={220} />
            </div>

            <div className="relative">

              <p className="mb-2 text-sm font-medium text-indigo-100">
                One store. Many possibilities.
              </p>

              <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">
                Find something you'll love.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-indigo-100 sm:text-base">
                Browse everything from everyday essentials to
                electronics, fashion, home products and more.
              </p>

            </div>

            <NavLink
              to="/products"
              className="relative flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Browse Everything
              <ArrowRight size={18} />
            </NavLink>

          </div>
        </div>
      </section>


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