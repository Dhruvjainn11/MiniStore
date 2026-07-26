import React from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  X,
} from "lucide-react";

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Total number of items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-150 items-center justify-center bg-slate-50 px-5 py-16">
        <div className="max-w-md text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
            <ShoppingCart size={34} />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-slate-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Looks like you haven't added anything to your
            cart yet. Explore our products and find something
            you like.
          </p>

          <NavLink
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <ShoppingBag size={18} />
            Explore Products
          </NavLink>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Your Shopping Cart
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Shopping Cart
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              You have {totalItems}{" "}
              {totalItems === 1 ? "item" : "items"} in your cart.
            </p>
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="flex w-fit items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-600"
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center"
              >

                {/* Product Image */}
                <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 sm:h-28 sm:w-28">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-contain p-3"
                  />
                </div>

                {/* Product Information */}
                <div className="min-w-0 flex-1">

                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {item.category}
                  </p>

                  <h2 className="mt-1 truncate pr-8 text-base font-semibold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-lg font-bold text-slate-900">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity */}
                  <div className="mt-4 flex items-center gap-3">

                    <div className="flex items-center overflow-hidden rounded-xl border border-slate-200">

                      <button
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(item.id)
                          )
                        }
                        disabled={item.quantity === 1}
                        className="flex h-9 w-9 items-center justify-center text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 text-sm font-semibold text-slate-700">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          dispatch(
                            increaseQuantity(item.id)
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <p className="text-sm text-slate-400">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label="Remove product"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6">

              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-slate-100 pb-5">

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Items ({totalItems})
                  </span>

                  <span className="font-medium text-slate-800">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Shipping
                  </span>

                  <span className="font-medium text-emerald-600">
                    Free
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between py-5">
                <div>
                  <p className="font-semibold text-slate-900">
                    Total
                  </p>

                  <p className="text-xs text-slate-400">
                    Including all items
                  </p>
                </div>

                <p className="text-2xl font-bold text-indigo-600">
                  ${subtotal.toFixed(2)}
                </p>
              </div>

              {/* Checkout */}
              <NavLink
                to="/checkout"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Proceed to Checkout
                <ArrowRight size={17} />
              </NavLink>

              <NavLink
                to="/products"
                className="mt-3 block text-center text-sm font-medium text-slate-500 transition hover:text-indigo-600"
              >
                Continue Shopping
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default CartPage;