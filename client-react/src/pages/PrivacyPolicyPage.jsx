import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useData } from '../config/DataContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PrivacyPolicyPage() {
  const { data, loading } = useData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-primary text-lg sm:text-xl">Loading...</div>
      </div>
    );
  }

  const policy = data.privacyPolicy;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <section className="py-10 sm:py-12 md:py-15 bg-bg-light min-h-[calc(100vh-200px)]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold no-underline transition-smooth hover:bg-accent hover:-translate-x-1.5 mb-6 sm:mb-8 text-sm sm:text-base min-h-[44px]"
          >
            <i className="fas fa-arrow-left"></i> Back to Tour
          </Link>

          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4 px-4">
              <i className="fas fa-shield-alt text-accent"></i> Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-[700px] mx-auto px-4 leading-relaxed">
              We value your privacy at EJI and are committed to protecting your data. This Privacy Policy outlines how we store, use, and collect your data when you visit our site and utilize our services.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
            <p className="text-sm sm:text-base md:text-[1.05rem] text-gray-600 leading-relaxed mb-8 sm:mb-10">
              {policy.introduction}
            </p>

            {policy.sections.map((section, index) => (
              <div
                key={index}
                className="mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-bg-light last:border-b-0 last:mb-0 last:pb-0"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="w-1 sm:w-1.5 h-5 sm:h-6 bg-accent rounded-sm inline-block"></span>
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                  {section.content}
                </p>

                {section.items && (
                  <ul className="list-none ml-[17px] mt-4">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative pl-6 mb-3 text-sm sm:text-base text-gray-500 leading-relaxed"
                      >
                        <span className="absolute left-0 text-accent font-bold text-xl">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <div className="bg-[#fff4f2] py-3 sm:py-4 px-4 sm:px-5 rounded-lg border-l-[4px] border-accent text-sm sm:text-[0.95rem] text-gray-600 mt-4">
                    <i className="fas fa-info-circle"></i> {section.note}
                  </div>
                )}

                {section.contact && (
                  <div className="bg-bg-light p-4 sm:p-5 md:p-6 rounded-xl mt-4 sm:mt-5">
                    <h3 className="text-primary mb-3 sm:mb-4 font-semibold text-base sm:text-lg">
                      Contact Information
                    </h3>
                    {section.contact.email && (
                      <p className="mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                        <i className="fas fa-envelope text-accent w-4 sm:w-5"></i>
                        <a
                          href={`mailto:${section.contact.email}`}
                          className="text-accent no-underline hover:underline break-all"
                        >
                          {section.contact.email}
                        </a>
                      </p>
                    )}
                    {section.contact.address && (
                      <p className="mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                        <i className="fas fa-map-marker-alt text-accent w-4 sm:w-5"></i>
                        {section.contact.address}
                      </p>
                    )}
                    {section.contact.phone && (
                      <p className="mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                        <i className="fas fa-phone text-accent w-4 sm:w-5"></i>
                        <a
                          href={`tel:${section.contact.phone.replace(/\s/g, '')}`}
                          className="text-accent no-underline hover:underline"
                        >
                          {section.contact.phone}
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
