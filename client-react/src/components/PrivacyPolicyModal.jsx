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
      className="fixed inset-0 bg-primary/80 flex justify-center items-center z-[9999] p-5"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-2xl max-w-[800px] w-full max-h-[85vh] overflow-y-auto relative animate-modalSlideIn"
        onClick={handleContentClick}
      >
        <div className="sticky top-0 bg-primary text-white p-6 pb-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-3xl font-bold m-0 flex items-center gap-2.5">
            <i className="fas fa-shield-alt"></i> Privacy Policy
          </h2>
          <button
            onClick={onClose}
            className="bg-none border-none text-white text-3xl cursor-pointer p-0 w-8 h-8 flex items-center justify-center transition-smooth hover:text-accent hover:rotate-90"
          >
            &times;
          </button>
        </div>
        <div className="p-8">
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            {policy.introduction}
          </p>
          {policy.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-primary text-xl font-semibold mb-3 flex items-center gap-2.5">
                <span className="w-1 h-5 bg-accent rounded-sm inline-block"></span>
                {section.heading}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                {section.content}
              </p>
              {section.items && (
                <ul className="list-none ml-3.5 mb-3">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="relative pl-5 mb-2 text-gray-500 leading-relaxed"
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
                <div className="bg-[#fff4f2] py-3 px-4 rounded-lg border-l-[3px] border-accent text-sm text-gray-600 mt-3">
                  <i className="fas fa-info-circle"></i> {section.note}
                </div>
              )}
              {section.contact && (
                <div className="bg-bg-light p-5 rounded-lg mt-3">
                  {section.contact.email && (
                    <p className="mb-2 flex items-center gap-2.5">
                      <i className="fas fa-envelope text-accent w-5"></i>
                      {section.contact.email}
                    </p>
                  )}
                  {section.contact.address && (
                    <p className="mb-2 flex items-center gap-2.5">
                      <i className="fas fa-map-marker-alt text-accent w-5"></i>
                      {section.contact.address}
                    </p>
                  )}
                  {section.contact.phone && (
                    <p className="mb-2 flex items-center gap-2.5">
                      <i className="fas fa-phone text-accent w-5"></i>
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
