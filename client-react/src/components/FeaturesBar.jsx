function FeaturesBar({ features }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-5 border border-bg-light rounded-xl text-center"
        >
          <i className={`fas ${feature.icon} text-3xl text-gold mb-3`}></i>
          <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
          <p className="text-xs text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesBar;
