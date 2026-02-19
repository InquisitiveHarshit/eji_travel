import InquiryForm from './InquiryForm';

function FinalFormSection() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Explore Japan?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let our experts craft your perfect itinerary. Fill in your details and we'll get back to you within 30 minutes.
            </p>
            <ul className="list-none flex flex-col gap-4">
              <li className="flex items-center gap-2.5">
                <i className="fas fa-check text-accent"></i>
                Personalized itinerary planning
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-check text-accent"></i>
                Best price guarantee
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fas fa-check text-accent"></i>
                24/7 support during your trip
              </li>
            </ul>
          </div>
          <div>
            <InquiryForm variant="final" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalFormSection;
