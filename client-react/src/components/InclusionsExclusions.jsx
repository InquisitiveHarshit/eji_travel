function InclusionsExclusions({ inclusions, exclusions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <div className="bg-[#f3f7fa] p-6 sm:p-8 rounded-2xl sm:rounded-[28px]">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 md:mb-7 flex gap-2 sm:gap-3 flex-wrap">
          <i className="fas fa-check-circle text-[#2e7d32]"></i>
          Inclusions
        </h3>
        <ul className="list-none">
          {inclusions.map((item, index) => (
            <li
              key={index}
              className="mb-2 sm:mb-3 flex items-baseline gap-2 sm:gap-2.5 text-sm sm:text-[0.95rem]"
            >
              <i className="fas fa-check-circle text-[#2e7d32] flex-shrink-0"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#fff4f2] p-6 sm:p-8 rounded-2xl sm:rounded-[28px]">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 md:mb-7 flex gap-2 sm:gap-3 flex-wrap">
          <i className="fas fa-times-circle text-[#b33f2f]"></i>
          Exclusions
        </h3>
        <ul className="list-none">
          {exclusions.map((item, index) => (
            <li
              key={index}
              className="mb-2 sm:mb-3 flex items-baseline gap-2 sm:gap-2.5 text-sm sm:text-[0.95rem]"
            >
              <i className="fas fa-times-circle text-[#b33f2f] flex-shrink-0"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InclusionsExclusions;
