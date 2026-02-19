import { useState } from 'react';
import { useData } from '../config/DataContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesBar from '../components/FeaturesBar';
import ItineraryList from '../components/ItineraryList';
import InquiryForm from '../components/InquiryForm';
import InclusionsExclusions from '../components/InclusionsExclusions';
import PrivacyPolicyModal from '../components/PrivacyPolicyModal';
import FinalFormSection from '../components/FinalFormSection';
import Footer from '../components/Footer';

function HomePage() {
  const { data, loading } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-primary text-lg sm:text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ overflowX: 'clip' }}>
      <Header />

      <Hero tour={data.tour} heroImage={data.heroImage} />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 sm:gap-10 lg:gap-[50px] py-8 sm:py-12 md:py-[60px] items-start">
          <main className="flex flex-col gap-12 sm:gap-16 lg:gap-[80px]">
            <section>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8">
                Experience Highlights
              </h2>
              <FeaturesBar features={data.features} />
            </section>

            <section id="itinerary-anchor">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8">
                The Itinerary
              </h2>
              <ItineraryList itinerary={data.itinerary} />
            </section>
          </main>

          <div className="sticky top-[120px] h-fit w-full self-start">
            <InquiryForm variant="sidebar" />
          </div>
        </div>

        <section className="pt-0">
          <main className="gap-0">
            <section>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8">
                Inclusions & Exclusions
              </h2>
              <InclusionsExclusions
                inclusions={data.inclusions}
                exclusions={data.exclusions}
              />
            </section>
          </main>
        </section>
      </div>

      <PrivacyPolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        policy={data.privacyPolicy}
      />

      <FinalFormSection />

      <Footer />
    </div>
  );
}

export default HomePage;