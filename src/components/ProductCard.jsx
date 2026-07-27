import React from "react";
import { Heart, ShoppingCart, Star, Plus, Minus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find((item) => item.id === product.id);

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
      toast.success("Removed from wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to wishlist");
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60">
      <div className="relative overflow-hidden bg-slate-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-56 w-full object-contain p-5 transition duration-300 group-hover:scale-105"
        />

        {product.discountPercentage > 0 && (
          <span className="absolute left-3 top-3 rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white">
            {Math.round(product.discountPercentage)}% OFF
          </span>
        )}

        <button
          onClick={handleWishlist}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition ${
            isWishlisted
              ? "bg-rose-50 text-rose-500"
              : "bg-white text-slate-500 hover:bg-rose-50 hover:text-rose-500"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} className={isWishlisted ? "fill-current" : ""} />
        </button>
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {product.category}
        </p>

        <h3 className="line-clamp-1 text-base font-semibold text-slate-900">
          {product.title}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-1.5">
          <Star size={16} className="fill-amber-400 text-amber-400" />

          <span className="text-sm font-semibold text-slate-700">
            {product.rating}
          </span>

          <span className="text-xs text-slate-400">rating</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Price</p>

            <p className="text-xl font-bold text-slate-900">${product.price}</p>
          </div>

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

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
          {cartItem ? (
            <div className="flex items-center justify-between overflow-hidden rounded-xl border border-indigo-200 bg-indigo-50">
              <button
                onClick={() => dispatch(decreaseQuantity(product.id))}
                disabled={cartItem.quantity === 1}
                className="flex h-10 w-10 items-center justify-center text-indigo-600 transition hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus size={17} />
              </button>

              <span className="text-sm font-bold text-indigo-700">
                {cartItem.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQuantity(product.id))}
                className="flex h-10 w-10 items-center justify-center text-indigo-600 transition hover:bg-indigo-100"
              >
                <Plus size={17} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <ShoppingCart size={17} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
