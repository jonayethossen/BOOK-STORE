import React from "react";

const Gallery = () => {
  // Dummy images array - apni apnar image path ekhane bosiye diben
  const images = [
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1481627561322-6c06ff80bc36?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1474367658819-e87c88aa834e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Main White Wrapper Card */}
        <div className="bg-white shadow-2xl rounded-sm p-6 md:p-10 border border-gray-200">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 border-b-2 border-gray-100 pb-4 inline-block px-10">
              Gallery
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-md border border-gray-300 group"
              >
                <img
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
