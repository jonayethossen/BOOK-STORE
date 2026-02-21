import React from "react";
import { Link } from "react-router";

import LoginBg from "../assets/photo2.jpg";

export default function Login() {
  return (
    <div
      className="hero min-h-screen bg-[#121212]"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.9)), url(${LoginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content flex-col lg:flex-row gap-12 max-w-5xl">
        <div className="text-center lg:text-left text-white max-w-md">
          <h1 className="text-5xl font-extrabold text-[#00a86b]">
            Welcome Back!
          </h1>
          <p className="py-6 text-gray-300">
            Log in to access personalized farming advice, track market prices,
            and connect with our agricultural experts. Join our community of
            smart farmers today.
          </p>
          <div className="hidden lg:block">
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
              <span className="text-[#00a86b]">✔</span> Verified Expert Advice
            </div>
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
              <span className="text-[#00a86b]">✔</span> Real-time Market Data
            </div>
          </div>
        </div>

        <div className="card bg-[#1a1a1a] w-full max-w-sm shrink-0 shadow-2xl border border-gray-800">
          <div className="card-body p-8">
            <h2 className="text-2xl font-bold text-center text-white mb-6">
              User Login
            </h2>

            <form>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-gray-400">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input bg-[#121212] border-gray-700 text-white focus:border-[#00a86b] focus:outline-none"
                  required
                />
              </div>

              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text text-gray-400">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input bg-[#121212] border-gray-700 text-white focus:border-[#00a86b] focus:outline-none"
                  required
                />
              </div>

              <div className="flex justify-end mb-6">
                <a className="text-xs text-[#00a86b] link link-hover">
                  Forgot password?
                </a>
              </div>

              <div className="form-control">
                <button className="btn bg-[#00a86b] hover:bg-[#008f5a] border-none text-white font-bold">
                  Login to Hub
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#00a86b] font-bold hover:underline"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
