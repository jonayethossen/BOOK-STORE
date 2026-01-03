import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Required modules
import { Mousewheel, Pagination, Navigation, Autoplay } from "swiper/modules";

//Photo Imports
import SliderImg1 from "../../assets/photo1.jpg";
import SliderImg2 from "../../assets/photo2.jpg";
import SliderImg3 from "../../assets/photo3.jpg";

export default function Slider() {
  const slides = [
    {
      id: 1,
      image: SliderImg1,
      heading: "Empowering Farmers through Digital Innovation",
      subText: "Access AI-powered crop diagnostics and modern techniques.",
      btnText: "Get Started",
    },
    {
      id: 2,
      image: SliderImg2,
      heading: "Real-Time Market Prices & Insights",
      subText: "Stay updated with the latest rates across the country.",
      btnText: "Check Prices",
    },
    {
      id: 3,
      image: SliderImg3,
      heading: "Weather-Ready Farming Solutions",
      subText: "Get real-time alerts to protect your harvest from disasters.",
      btnText: "View Forecast",
    },
  ];

  return (
    <div className="h-[500px] w-full bg-[#121212]">
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Mousewheel, Pagination, Navigation, Autoplay]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative overflow-hidden">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.heading}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay  */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content Over Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#00a86b] mb-4 drop-shadow-lg">
                {slide.heading}
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl mb-8 drop-shadow-md">
                {slide.subText}
              </p>
              <button className="btn bg-[#00a86b] hover:bg-[#008f5a] border-none text-white px-8 rounded-full transition-all">
                {slide.btnText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
