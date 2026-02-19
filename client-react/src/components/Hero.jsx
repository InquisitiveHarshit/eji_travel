function Hero({ tour }) {
  return (
    <section
      className="relative py-10 sm:py-12 md:py-15 lg:py-20 min-h-[500px] flex items-center"
      style={{
        backgroundImage: "url('/heroImage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          <span className="text-accent font-bold tracking-widest text-xs sm:text-sm">PREMIUM JOURNEY</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mt-3 sm:mt-4 md:mt-5 mb-4 sm:mb-5">
            {tour.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-4 sm:mb-5">
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
