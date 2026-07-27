import React from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  Heart,
  Trash2,
  ShoppingCart,
  ShoppingBag,
  X,
  Star,
} from "lucide-react";

import {
  removeFromWishlist,
  clearWishlist,
} from "../features/wishlist/wishlistSlice";

import { addToCart } from "../features/cart/cartSlice";

const WishlistPage = () => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const cartItems = useSelector((state) => state.cart.items);

  // Check whether product already exists in cart
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Add product to cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Empty Wishlist
  if (wishlistItems.length === 0) {
    return (
      <main className="flex min-h-150 items-center justify-center bg-slate-50 px-5 py-16">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 text-rose-500">
            <Heart size={34} />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-slate-900">
            Your wishlist is empty
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Save the products you love and find them here whenever you're ready
            to shop.
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
        
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-rose-500">
              Saved Products
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              My Wishlist
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              You have{" "}
              <span className="font-semibold text-slate-700">
                {wishlistItems.length}
              </span>{" "}
              {wishlistItems.length === 1 ? "product" : "products"} saved.
            </p>
          </div>

          <button
            onClick={() => dispatch(clearWishlist())}
            className="flex w-fit items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-600"
          >
            <Trash2 size={16} />
            Clear Wishlist
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((product) => {
            const inCart = isProductInCart(product.id);

            return (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="relative overflow-hidden bg-slate-50">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-56 w-full object-contain p-5 transition duration-300 group-hover:scale-105"
                  />

                  <button
                    onClick={() => dispatch(removeFromWishlist(product.id))}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-rose-500 shadow-sm transition hover:bg-rose-50"
                    aria-label="Remove from wishlist"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {product.category}
                  </p>

                  <h2 className="mt-2 line-clamp-1 text-base font-semibold text-slate-900">
                    {product.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
                    {product.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5">
                    <Star size={16} className="fill-amber-400 text-amber-400" />

                    <span className="text-sm font-semibold text-slate-700">
                      {product.rating}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-bold text-slate-900">
                      ${product.price}
                    </p>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        product.stock > 0
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={inCart}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition ${
                      inCart
                        ? "cursor-default bg-indigo-50 text-indigo-600"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    <ShoppingCart size={17} />

                    {inCart ? "Already in Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default WishlistPage;
