import React from "react";

const MemberFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "SHARIF",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem consectetur cumque exercitationem incidunt inventore officia quae quam repellendus ullam?",
    },
    {
      id: 2,
      name: "SHARIF",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem consectetur cumque exercitationem incidunt inventore officia quae quam repellendus ullam?",
    },
    {
      id: 3,
      name: "SHARIF",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem consectetur cumque exercitationem incidunt inventore officia quae quam repellendus ullam?",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Outer White Card Container */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-sm p-8 md:p-12 border border-gray-100">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">
          Member's feedback
        </h2>
        {/* Feedback Cards Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-md p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <p className="text-gray-600 leading-relaxed italic">
                "{item.text}"
              </p>

              <div className="mt-6 text-right">
                <span className="font-bold text-lg text-slate-900">
                  ~{item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberFeedback;
