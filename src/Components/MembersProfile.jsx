import React from "react";

const MemberProfile = () => {
  // Sample data array
  const members = [
    {
      id: 1,
      name: "RAYON SHARIF",
      role: "Library Manager",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      name: "RAYON SHARIF",
      role: "Library Manager",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      name: "RAYON SHARIF",
      role: "Library Manager",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 4,
      name: "RAYON SHARIF",
      role: "Library Manager",
      image: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white border border-gray-100 shadow-sm my-10 font-sans">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-medium text-gray-800 mb-6">
          Member's Profile
        </h2>
        <hr className="border-gray-200" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-4 gap-0 border-l border-t border-gray-200">
        {members.map((member) => (
          <div
            key={member.id}
            className="group border-r border-b border-gray-200 bg-white transition-all hover:shadow-lg"
          >
            {/* Image Container */}
            <div className="w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Info Container */}
            <div className="p-4 bg-white">
              <h3 className="font-bold text-black text-lg tracking-tight uppercase">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberProfile;
