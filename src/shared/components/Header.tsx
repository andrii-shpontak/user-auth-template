import { Link } from '@tanstack/react-router';

export function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 px-8">
      <nav className="flex gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>
      </nav>
    </header>
  );
}
