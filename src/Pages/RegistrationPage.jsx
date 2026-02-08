import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Registration Card Wrapper */}
      <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12 w-full max-w-lg border border-gray-100">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-wider">
            Create Account
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-2"></div>
          <p className="text-gray-500 mt-3">
            Join our community of book lovers
          </p>
        </div>

        <form className="space-y-5">
          {/* Full Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered rounded-sm focus:outline-primary w-full bg-gray-50"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="input input-bordered rounded-sm focus:outline-primary w-full bg-gray-50"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered rounded-sm focus:outline-primary w-full bg-gray-50"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered rounded-sm focus:outline-primary w-full bg-gray-50"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 py-2">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-sm rounded-sm"
              required
            />
            <span className="text-sm text-gray-600">
              I agree to the Terms & Conditions
            </span>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-sm text-white uppercase tracking-widest hover:shadow-lg transition-all">
              Register Now
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="text-primary font-bold hover:underline ml-1"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
