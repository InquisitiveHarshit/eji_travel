function ItineraryList({ itinerary }) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {itinerary.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-5 border border-bg-light rounded-xl overflow-hidden bg-white transition-smooth hover:border-accent"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 sm:h-full object-cover"
          />
          <div className="p-4 sm:p-5">
            <span className="text-accent font-extrabold text-xs uppercase">
              Day {item.day}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold my-1 sm:my-1.5 text-primary">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItineraryList;
