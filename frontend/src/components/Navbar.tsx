import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold">NewsNova</h2>

      <div className="flex gap-6">
        <Link to="/">Home</Link>

        {/* Optional */}
        {/* <Link to="/top-headlines">Top Headlines</Link> */}

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;