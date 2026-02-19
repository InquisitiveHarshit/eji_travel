import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black  text-white py-12 sm:py-16 md:py-20 text-center mt-12 sm:mt-15">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <p className="font-extrabold text-lg sm:text-xl mb-2 sm:mb-2.5">EJI TRAVEL</p>
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
    </footer>
  );
}

export default Footer;
