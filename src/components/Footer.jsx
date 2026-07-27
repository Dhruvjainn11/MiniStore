import React from "react";
import { NavLink } from "react-router";
import { Store, Heart, ShoppingCart, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <NavLink to="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Store size={21} />
              </div>

              <span className="text-xl font-bold text-slate-900">
                Mini<span className="text-indigo-600">Store</span>
              </span>
            </NavLink>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              A simple and modern shopping experience built to make discovering
              your favorite products easy.
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href="https://github.com/Dhruvjainn11"
                target="_blank"
                aria-label="Github"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/dhruv-jain-dev/"
                aria-label="LinkedIn"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Shop</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <NavLink
                to="/products"
                className="transition hover:text-indigo-600"
              >
                All Products
              </NavLink>

              <NavLink
                to="/wishlist"
                className="flex items-center gap-2 transition hover:text-indigo-600"
              >
                <Heart size={15} />
                Wishlist
              </NavLink>

              <NavLink
                to="/cart"
                className="flex items-center gap-2 transition hover:text-indigo-600"
              >
                <ShoppingCart size={15} />
                Cart
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Contact</h3>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Have a question about MiniStore? We'd love to hear from you.
            </p>

            <a
              href="mailto:support@ministore.com"
              className="mt-4 flex items-center gap-2 text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              <Mail size={16} />
              support@ministore.com
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {currentYear} MiniStore. All rights reserved.</p>

          <p>Built with React & Redux Toolkit</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
