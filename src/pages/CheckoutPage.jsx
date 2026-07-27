import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import {
  MapPin,
  User,
  Mail,
  Phone,
  Home,
  Map,
  Hash,
  CreditCard,
  ShoppingBag,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { clearCart } from "../features/cart/cartSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: currentUser?.name || "",
      email: currentUser?.email || "",
    },
  });

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = (data) => {
    console.log("Shipping Details:", data);
    console.log("Order Items:", cartItems);

    dispatch(clearCart());

    setOrderPlaced(true);
  };

  // Order Success
  if (orderPlaced) {
    return (
      <main className="flex min-h-162.5 items-center justify-center bg-linear-to-br from-indigo-50 via-white to-violet-50 px-5 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-indigo-100 bg-white p-8 text-center shadow-xl shadow-indigo-100/50 sm:p-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
            <CheckCircle2 size={38} />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Order placed!
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
            Your demo order has been placed successfully. Thanks for shopping
            with MiniStore.
          </p>

          <NavLink
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </NavLink>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8">
          <NavLink
            to="/cart"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={16} />
            Back to cart
          </NavLink>

          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Almost there
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Enter your shipping information to complete your order.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handlePlaceOrder)}
          className="grid gap-8 lg:grid-cols-[1fr_380px]"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <MapPin size={20} />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Shipping Information
                </h2>

                <p className="text-xs text-slate-500">
                  Where should we deliver your order?
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                label="Full Name"
                name="name"
                icon={<User size={17} />}
                register={register}
                error={errors.name}
                validation={{
                  required: "Name is required",
                }}
              />

              <InputField
                label="Email"
                name="email"
                type="email"
                icon={<Mail size={17} />}
                register={register}
                error={errors.email}
                validation={{
                  required: "Email is required",
                }}
              />

              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                icon={<Phone size={17} />}
                register={register}
                error={errors.phone}
                validation={{
                  required: "Phone number is required",
                }}
              />

              <InputField
                label="City"
                name="city"
                icon={<Map size={17} />}
                register={register}
                error={errors.city}
                validation={{
                  required: "City is required",
                }}
              />

              <div className="sm:col-span-2">
                <InputField
                  label="Address"
                  name="address"
                  icon={<Home size={17} />}
                  register={register}
                  error={errors.address}
                  validation={{
                    required: "Address is required",
                  }}
                />
              </div>

              <InputField
                label="State"
                name="state"
                icon={<MapPin size={17} />}
                register={register}
                error={errors.state}
                validation={{
                  required: "State is required",
                }}
              />

              <InputField
                label="Postal Code"
                name="postalCode"
                icon={<Hash size={17} />}
                register={register}
                error={errors.postalCode}
                validation={{
                  required: "Postal code is required",
                }}
              />
            </div>

            <div className="mt-8 border-t border-slate-100 pt-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <CreditCard size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">Payment</h2>

                  <p className="text-xs text-slate-500">
                    Demo checkout — no real payment required
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <p className="text-sm font-medium text-indigo-700">
                  Cash on Delivery
                </p>

                <p className="mt-1 text-xs leading-5 text-indigo-600/70">
                  This project uses a simulated checkout because MiniStore is a
                  frontend-only application.
                </p>
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="mt-5 max-h-72 space-y-4 overflow-y-auto border-b border-slate-100 pb-5">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="h-16 w-16 shrink-0 rounded-xl bg-slate-50">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-slate-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Items ({totalItems})</span>

                  <span className="font-medium text-slate-700">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Shipping</span>

                  <span className="font-medium text-emerald-600">Free</span>
                </div>
              </div>

              <div className="my-5 border-t border-slate-100" />

              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">Total</span>

                <span className="text-2xl font-bold text-indigo-600">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                <CheckCircle2 size={18} />
                Place Order
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                No real payment will be processed.
              </p>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  icon,
  register,
  error,
  validation,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          id={name}
          type={type}
          {...register(name, validation)}
          className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition ${
            error
              ? "border-red-400 focus:ring-4 focus:ring-red-50"
              : "border-slate-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
          }`}
        />
      </div>

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CheckoutPage;
