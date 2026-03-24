import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // important
    window.location.href = "/login";
  };

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
      <Link to="/">
        <h2 className="text-xl font-bold">NewsNova</h2>
      </Link>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        {token ? (
          <button onClick={handleLogout} className="cursor-pointer">Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
