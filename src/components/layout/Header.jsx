import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold text-green-600">TokoAki</div>
        <nav className="space-x-4 hidden md:block">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/katalog" className="hover:text-green-600">Katalog</Link>
          <Link to="/tentang" className="hover:text-green-600">Tentang Kami</Link>
        </nav>
      </div>
    </header>
  );
}
