import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 md:py-20 mt-12 sm:mt-15">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Side - Logo and Tagline */}
          <div className="text-left">
            <img src="/logo.svg" alt="EJI Travel" className="h-12 sm:h-14 mb-4" />
            <p className="text-sm sm:text-base text-gray-300 max-w-md">
              Explore the world with ease and confidence. We Offer curated travel experiences that go beyond the ordinary. Let us handle the details, so you can focus on creating memories
            </p>
          </div>

          {/* Middle - Empty */}
          <div></div>

          {/* Right Side - Contact Us */}
          <div className="text-left">
            <h3 className="font-bold text-lg sm:text-xl mb-3">Contact Us</h3>
            <div className="text-sm sm:text-base text-gray-300">
              <p className="font-semibold text-white mb-2">EJI Travel Solutions</p>
              <p className="max-w-xs">
                First Floor, F-25, F Block, Pocket F, Sector 18, Noida, Uttar Pradesh 201301
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm sm:text-base">© 2026 Japan Specialist. All Rights Reserved.</p>
          <div className="mt-4">
            <Link
              to="/privacy"
              className="text-accent no-underline text-sm sm:text-base inline-flex items-center gap-1.5 transition-smooth hover:text-gold hover:underline"
            >
              <i className="fas fa-file-alt"></i> Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
