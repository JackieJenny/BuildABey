import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Create", to: "/create" },
  { name: "Compare", to: "/compare" },
  { name: "Collection", to: "/collection" },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 group">
      {/* Thin hover area (always visible) */}
      <div className="h-5 w-full bg-transparent"></div>

      {/* Actual navbar slides down */}
      <nav
  className="absolute top-0 w-full backdrop-blur-md bg-glassgrey/30 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
>
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
    <Link to="/" className="text-xl font-bold text-violet-500">
      Home
    </Link>

    <div className="flex space-x-8">
      {navItems.map(({ name, to }) => {
        const isActive = location.pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className={`transition-colors duration-300 ${
              isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
            }`}
          >
            {name}
          </Link>
        );
      })}
    </div>
  </div>
</nav>
    </div>
  );
};
