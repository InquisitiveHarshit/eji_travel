function Hero({ tour, heroImage }) {
  return (
    <section className="py-10 sm:py-12 md:py-15 lg:py-20 bg-bg-light">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-accent font-bold tracking-widest text-xs sm:text-sm">PREMIUM JOURNEY</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight mt-3 sm:mt-4 md:mt-5 mb-4 sm:mb-5">
              {tour.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5">
              {tour.subtitle}
            </p>
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-bg-light flex-wrap">
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
          <div className="order-1 md:order-2">
            <img
              src={heroImage}
              alt="Japan"
              className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:h-[350px] object-cover rounded-xl md:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
