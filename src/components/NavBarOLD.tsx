import { Link, useLocation } from 'react-router-dom'

const NavBarOLD = () => {
  const location = useLocation()

  const navItems = [
    { name: 'Landing', path: '/' },
    { name: 'Create', path: '/create' },
    { name: 'Summary', path: '/summary' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* Left: Logo / Brand */}
        <Link to="/" className="text-lg font-bold text-blue-600">
          BUILD A BEY
        </Link>

        {/* Middle: Nav links */}
        <div className="flex gap-6">
          {navItems.map(({ name, path }) => {
            const isActive = location.pathname === path
            return (
              <Link
                key={name}
                to={path}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-gray-100 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {name}
              </Link>
            )
          })}
        </div>

        {/* Right: Button */}
        <Link
          to="/create"
          className="bg-violet-200 text-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Get Started
        </Link>

      </nav>
    </header>
  )
}

export default NavBarOLD
