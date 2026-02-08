import React from "react";

const BookCard = ({ title, price, image, description }) => (
  <div className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col h-full">
    <div className="w-full aspect-[3/4] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex flex-col flex-grow border-t border-gray-100">
      <h3 className="text-sm font-bold text-gray-800 line-clamp-1 uppercase">
        {title}
      </h3>
      <p className="text-xs text-gray-500 mt-1 flex-grow">
        {description || "A classic developing reading habit."}
      </p>
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
        <span className="text-pink-600 font-bold text-sm">${price}</span>
        <button className="text-[10px] px-3 py-1 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors rounded-sm uppercase font-semibold">
          View Book
        </button>
      </div>
    </div>
  </div>
);

const BestSellerCard = ({ title, image }) => (
  <div className="bg-white border border-gray-200 p-3 rounded-sm flex gap-4 items-start shadow-sm">
    <img
      src={image}
      alt={title}
      className="w-20 h-28 object-cover rounded-sm flex-shrink-0"
    />
    <div>
      <h4 className="font-bold text-gray-800 text-sm line-clamp-1">{title}</h4>
      <p className="text-[10px] text-gray-500 mt-1">
        One of the most popular books this year.
      </p>
      <button className="mt-3 bg-pink-500 text-white text-[10px] px-4 py-1.5 rounded-sm hover:bg-pink-600 uppercase font-medium">
        Buy Now
      </button>
    </div>
  </div>
);

const CataloguePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Featured Books Section */}
        <section className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 pb-4 border-b">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <BookCard
              title="Harry Potter"
              price="12.00"
              image="https://via.placeholder.com/300x400?text=Harry+Potter"
            />
            <BookCard
              title="Sherlock Holmes"
              price="15.50"
              image="https://via.placeholder.com/300x400?text=Sherlock+Holmes"
            />
            <BookCard
              title="William Shakespeare"
              price="10.99"
              image="https://via.placeholder.com/300x400?text=Shakespeare"
            />
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 pb-4 border-b">
            New Arrivals
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <BookCard
              title="The Odyssey"
              price="18.00"
              image="https://via.placeholder.com/300x400?text=Odyssey"
            />
            <BookCard
              title="Atmosphere"
              price="14.20"
              image="https://via.placeholder.com/300x400?text=Atmosphere"
            />
            <BookCard
              title="Alice In Wonderland"
              price="11.00"
              image="https://via.placeholder.com/300x400?text=Alice"
            />
            <BookCard
              title="The Names"
              price="16.50"
              image="https://via.placeholder.com/300x400?text=The+Names"
            />
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 pb-4 border-b">
            Best Sellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BestSellerCard
              title="Himu Somogro"
              image="https://via.placeholder.com/150x200?text=Himu"
            />
            <BestSellerCard
              title="The Alchemist"
              image="https://via.placeholder.com/150x200?text=Alchemist"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CataloguePage;
