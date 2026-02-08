import React from "react";

const LibraryDetails = () => {
  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Our Library Details
          </h2>
          <p className="text-base-content/70">
            Exploring the world, one book at a time.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Books Card */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-primary hover:scale-105 transition-transform duration-300">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2"></div>
              <h3 className="card-title">Total Books</h3>
              <p className="text-2xl font-bold text-secondary">25,000+</p>
              <p className="text-sm opacity-60">
                Wide range of genres and authors.
              </p>
            </div>
          </div>

          {/* Members Card */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-accent hover:scale-105 transition-transform duration-300">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2"></div>
              <h3 className="card-title">Active Members</h3>
              <p className="text-2xl font-bold text-secondary">5,200+</p>
              <p className="text-sm opacity-60">
                Growing community of book lovers.
              </p>
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-info hover:scale-105 transition-transform duration-300">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2"></div>
              <h3 className="card-title">Opening Hours</h3>
              <p className="text-lg font-semibold">9:00 AM - 9:00 PM</p>
              <p className="text-sm opacity-60">Open 7 days a week for you.</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="card bg-base-100 shadow-xl border-t-4 border-success hover:scale-105 transition-transform duration-300">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2"></div>
              <h3 className="card-title">Location</h3>
              <p className="text-lg font-semibold">Dhaka, Bangladesh</p>
              <p className="text-sm opacity-60">
                Visit us in the heart of the city.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action (DaisyUI Stats alternate) */}
        <div className="mt-12 flex justify-center">
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 w-full">
            <div className="stat">
              <div className="stat-title">Daily Visitors</div>
              <div className="stat-value text-primary">400+</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            <div className="stat">
              <div className="stat-title">New Books Added</div>
              <div className="stat-value text-secondary">150</div>
              <div className="stat-desc">↗︎ 21% more than last month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryDetails;
