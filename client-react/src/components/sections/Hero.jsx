import { useState, useEffect } from 'react';

const carouselImages = [
  '/heroImage.png',
  '/tower.png',
  '/shibuya.png',
];

function Hero({ tour }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-10 sm:py-12 md:py-15 lg:py-20 min-h-[500px] flex items-center overflow-hidden">
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .shimmer-text {
          background: linear-gradient(
            90deg,
            rgba(255, 140, 0, 0.5) 0%,
            rgba(255, 165, 0, 0.8) 25%,
            rgba(255, 215, 0, 1) 50%,
            rgba(255, 165, 0, 0.8) 75%,
            rgba(255, 140, 0, 0.5) 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        .carousel-slide {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .carousel-slide.active {
          opacity: 1;
        }
      `}</style>

      {/* Carousel Background */}
      <div className="absolute inset-0 -z-20 bg-gray-900">
        {carouselImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 carousel-slide ${
              index === currentSlide ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-500 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 w-full z-10">
        <div className="max-w-2xl">
          <span className="font-bold tracking-widest text-xs sm:text-sm shimmer-text">PREMIUM JOURNEY</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-1 sm:mt-2 md:mt-3 mb-1 sm:mb-2 md:mb-3 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            {tour.title}
          </h1>
          <p className="text-base sm:text-lg text-white mb-4 sm:mb-5">
            {tour.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-white/20 flex-wrap">
            <span className="text-gray-400 line-through text-base sm:text-lg">
              {tour.pricing.currency}{tour.pricing.oldPrice.toLocaleString()}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-primary">
              {tour.pricing.currency}{tour.pricing.newPrice.toLocaleString()}
            </span>
            <span className="bg-accent text-white px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap">
              {tour.pricing.discount}% OFF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
