import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Create", to: "/create" },
  { name: "Compare", to: "/compare" },
  { name: "Collection", to: "/collection" },

];


export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-gray-50/2 shadow-2xs py-4">
      <div className="max-w-7xl mx-auto ml-2 px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-violet-500 ml-2">
          Home
        </Link>

        <div className="flex space-x-35 ml-auto">
          {navItems.map(({ name, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`transition-colors duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-white-500"
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
