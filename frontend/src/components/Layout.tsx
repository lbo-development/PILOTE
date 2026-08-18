import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

/**
 * Layout global de l'application : navigation commune + zone de contenu (Outlet).
 * Les pages déclarées dans le router s'affichent à la place de <Outlet />.
 */
export function Layout() {
  return (
    <div className="layout">
      <nav className="layout__nav">
        <Link to="/">PILOT</Link>
      </nav>
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}
