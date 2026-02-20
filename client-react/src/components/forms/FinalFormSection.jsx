import InquiryForm from './InquiryForm';

function FinalFormSection() {
  return (
    <section className="bg-bg-light py-12 sm:py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-15 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
              Ready to Explore Japan?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Let our experts craft your perfect itinerary. Fill in your details and we'll get back to you within 30 minutes.
            </p>
            <ul className="list-none flex flex-col gap-3 sm:gap-4">
              <li className="flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base">
                <i className="fas fa-check text-accent"></i>
                Personalized itinerary planning
              </li>
              <li className="flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base">
                <i className="fas fa-check text-accent"></i>
                Best price guarantee
              </li>
              <li className="flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base">
                <i className="fas fa-check text-accent"></i>
                24/7 support during your trip
              </li>
            </ul>
          </div>
          <div className="w-full">
            <InquiryForm variant="final" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalFormSection;
