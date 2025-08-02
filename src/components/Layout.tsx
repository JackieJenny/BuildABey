import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBarOLD'

export default function Layout() {
  const location = useLocation()
  const hideNav = location.pathname === '/' 

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideNav && <NavBar />}
      <main className={`${!hideNav ? 'pt-20' : ''} max-w-6xl mx-auto px-4`}>
        <Outlet />
      </main>
    </div>
  )
}
