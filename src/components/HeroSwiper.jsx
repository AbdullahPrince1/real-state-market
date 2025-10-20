import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSwiper() {
  const slides = [
    {
      image:
        "https://mbluxury1.s3.amazonaws.com/2024/04/17092933/Luxury-Real-Estate-Brands.jpg",
      title: "Discover the Future",
      subtitle: "Innovate. Create. Inspire.",
      button: "Get Started",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/6192b02960e94236fc22acce/1619b64e-7cb8-47f7-b1c8-97372376891f/Real+Esta.jpg",
      title: "Empower Your Ideas",
      subtitle: "Building digital experiences that matter.",
      button: "Learn More",
    },
    {
      image:
        "https://www.mckissock.com/wp-content/uploads/2016/11/GettyImages-1151832961.jpg",
      title: "Transform Your Business",
      subtitle: "Let’s build something amazing together.",
      button: "Contact Us",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-2xl shadow-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-3"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-lg md:text-2xl mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  {slide.button}
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
