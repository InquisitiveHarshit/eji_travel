function InclusionsExclusions({ inclusions, exclusions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#f3f7fa] p-8 rounded-[28px]">
        <h3 className="text-3xl font-bold mb-7 flex gap-3">
          <i className="fas fa-check-circle text-[#2e7d32]"></i>
          Inclusions
        </h3>
        <ul className="list-none">
          {inclusions.map((item, index) => (
            <li
              key={index}
              className="mb-3 flex items-baseline gap-2.5 text-[0.95rem]"
            >
              <i className="fas fa-check-circle text-[#2e7d32]"></i>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#fff4f2] p-8 rounded-[28px]">
        <h3 className="text-3xl font-bold mb-7 flex gap-3">
          <i className="fas fa-times-circle text-[#b33f2f]"></i>
          Exclusions
        </h3>
        <ul className="list-none">
          {exclusions.map((item, index) => (
            <li
              key={index}
              className="mb-3 flex items-baseline gap-2.5 text-[0.95rem]"
            >
              <i className="fas fa-times-circle text-[#b33f2f]"></i>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InclusionsExclusions;
