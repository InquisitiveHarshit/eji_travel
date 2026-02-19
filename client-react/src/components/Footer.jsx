import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white py-20 text-center mt-15">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-extrabold text-xl mb-2.5">EJI TRAVEL</p>
        <p>© 2026 Japan Specialist. All Rights Reserved.</p>
        <div className="mt-4">
          <Link
            to="/privacy"
            className="text-accent no-underline text-sm inline-flex items-center gap-1.5 transition-smooth hover:text-gold hover:underline"
          >
            <i className="fas fa-file-alt"></i> Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
