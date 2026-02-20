import GetInTouchForm from './GetInTouchForm';

function FinalFormSection() {
  return (
    <section className=" py-12 sm:py-16 md:py-20 text-white">
      <div className="max-w-screen-xl  mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-15 items-center">
          <div className="bg-white p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-102 hover:shadow-2xl">
            <h2 className="text-2xl sm:text-3xl  font-bold text-primary mb-4 sm:mb-5 leading-tight">
              Not Sure Where to Start?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
              Planning a trip can feel overwhelming — destinations, budgets, hotels, visas… we understand.
              <br />
              Share your details and our travel experts will get in touch to guide you with the best options tailored to you.
            </p>
            <ul className="list-none flex flex-col gap-2 sm:gap-3 mb-5 sm:mb-6">
              <li className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-600">
                <span className="text-accent flex-shrink-0 mt-0.5">✔</span>
                Clear answers to all your questions
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-600">
                <span className="text-accent flex-shrink-0 mt-0.5">✔</span>
                Personalized recommendations
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-600">
                <span className="text-accent flex-shrink-0 mt-0.5">✔</span>
                Transparent pricing guidance
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-600">
                <span className="text-accent flex-shrink-0 mt-0.5">✔</span>
                Expert support from start to finish
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600">
              Let’s make your travel planning simple and stress-free.
            </p>
          </div>
          <div className="w-full relative z-10">
            <GetInTouchForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalFormSection;
