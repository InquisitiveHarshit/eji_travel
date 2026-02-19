function Hero({ tour, heroImage }) {
  return (
    <section className="py-15 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-accent font-bold tracking-widest text-sm">PREMIUM JOURNEY</span>
            <h1 className="text-5xl font-extrabold text-primary leading-tight mt-5 mb-5">
              {tour.title}
            </h1>
            <p className="text-lg text-gray-600 mb-5">
              {tour.subtitle}
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-lg border border-bg-light">
              <span className="text-gray-400 line-through text-lg">
                {tour.pricing.currency}{tour.pricing.oldPrice.toLocaleString()}
              </span>
              <span className="text-3xl font-extrabold text-primary">
                {tour.pricing.currency}{tour.pricing.newPrice.toLocaleString()}
              </span>
              <span className="bg-accent text-white px-2 py-0.5 rounded text-xs font-semibold">
                {tour.pricing.discount}% OFF
              </span>
            </div>
          </div>
          <div>
            <img
              src={heroImage}
              alt="Japan"
              className="w-full rounded-2xl h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
