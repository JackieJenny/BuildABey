import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Create", to: "/create" },
  { name: "Compare", to: "/compare" },
  { name: "Collection", to: "/collection" },

];


export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">
          BuildABey
        </Link>

        <div className="flex space-x-6">
          {navItems.map(({ name, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`transition-colors duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
