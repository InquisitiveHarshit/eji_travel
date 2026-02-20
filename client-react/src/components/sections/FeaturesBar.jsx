function FeaturesBar({ features }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-4 sm:p-5 border border-bg-light rounded-xl text-center bg-white"
        >
          <i className={`fas ${feature.icon} text-2xl sm:text-3xl text-gold mb-2 sm:mb-3`}></i>
          <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">{feature.title}</h4>
          <p className="text-xs sm:text-sm text-gray-600 leading-snug">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesBar;
