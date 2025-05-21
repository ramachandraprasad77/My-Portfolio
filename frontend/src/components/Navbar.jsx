import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-center gap-10 p-4 bg-gray-900 text-white">
      <Link to="/" className="hover:text-yellow-400">Home</Link>
      <Link to="/about" className="hover:text-yellow-400">About</Link>
      <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
      <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
    </nav>
  );
}

export default Navbar;