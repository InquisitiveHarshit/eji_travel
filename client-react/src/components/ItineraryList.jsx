function ItineraryList({ itinerary }) {
  return (
    <div className="flex flex-col gap-8">
      {itinerary.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[150px_1fr] gap-5 border border-bg-light rounded-xl overflow-hidden bg-white transition-smooth hover:border-accent"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="p-5">
            <span className="text-accent font-extrabold text-xs uppercase">
              Day {item.day}
            </span>
            <h3 className="text-xl font-semibold my-1.5 text-primary">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItineraryList;
