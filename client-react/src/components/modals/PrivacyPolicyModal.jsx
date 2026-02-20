import { useEffect } from 'react';

function PrivacyPolicyModal({ isOpen, onClose, policy }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !policy) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-primary/80 flex justify-center items-center z-[9999] p-4 sm:p-5 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-xl sm:rounded-2xl w-full max-w-[800px] max-h-[85vh] overflow-y-auto relative animate-modalSlideIn my-auto"
        onClick={handleContentClick}
      >
        <div className="sticky top-0 bg-primary text-white p-4 sm:p-6 pb-4 sm:pb-6 rounded-t-xl sm:rounded-t-2xl flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold m-0 flex items-center gap-2 sm:gap-2.5">
            <i className="fas fa-shield-alt"></i> Privacy Policy
          </h2>
          <button
            onClick={onClose}
            className="bg-none border-none text-white text-2xl sm:text-3xl cursor-pointer p-0 w-8 h-8 min-h-[44px] min-w-[44px] flex items-center justify-center transition-smooth hover:text-accent hover:rotate-90"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
            {policy.introduction}
          </p>
          {policy.sections.map((section, index) => (
            <div key={index} className="mb-6 sm:mb-8">
              <h3 className="text-primary text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-2.5">
                <span className="w-1 h-4 sm:h-5 bg-accent rounded-sm inline-block"></span>
                {section.heading}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                {section.content}
              </p>
              {section.items && (
                <ul className="list-none ml-3.5 mb-3 sm:mb-4">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="relative pl-5 mb-2 text-sm sm:text-base text-gray-500 leading-relaxed"
                    >
                      <span className="absolute left-0 text-accent font-bold">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <div className="bg-[#fff4f2] py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg border-l-[3px] border-accent text-xs sm:text-sm text-gray-600 mt-3">
                  <i className="fas fa-info-circle"></i> {section.note}
                </div>
              )}
              {section.contact && (
                <div className="bg-bg-light p-4 sm:p-5 rounded-lg mt-3 sm:mt-4">
                  {section.contact.email && (
                    <p className="mb-2 flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base">
                      <i className="fas fa-envelope text-accent w-4 sm:w-5"></i>
                      {section.contact.email}
                    </p>
                  )}
                  {section.contact.address && (
                    <p className="mb-2 flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base">
                      <i className="fas fa-map-marker-alt text-accent w-4 sm:w-5"></i>
                      {section.contact.address}
                    </p>
                  )}
                  {section.contact.phone && (
                    <p className="mb-2 flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base">
                      <i className="fas fa-phone text-accent w-4 sm:w-5"></i>
                      {section.contact.phone}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyModal;
