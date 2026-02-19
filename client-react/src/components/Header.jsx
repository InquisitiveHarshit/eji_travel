import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="h-20 flex items-center border-b border-bg-light bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="text-2xl font-extrabold text-primary no-underline flex items-center gap-2">
          <i className="fas fa-torii-gate text-accent"></i>
          EJI TRAVEL
        </Link>
      </div>
    </header>
  );
}

export default Header;
