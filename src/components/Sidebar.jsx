import { NavLink } from 'react-router-dom'
import '../styles/Sidebar.css'

const navItems = [
  { label: 'Dashboard',    icon: '⊞', path: '/' },
  { label: 'Транзакции',   icon: '⇅', path: '/transactions' },
  { label: 'Карты',        icon: '▭', path: '/cards' },
  { label: 'Аналитика',    icon: '∿', path: '/analytics' },
  { label: 'Настройки',    icon: '⚙', path: '/settings' },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={'overlay' + (isOpen ? ' active' : '')}
        onClick={onClose}
      />
      <aside className={'sidebar' + (isOpen ? ' open' : '')}>
        <div className="logo">
          <span className="logo-icon" />
          FinDash
        </div>
        <nav className="nav">
          {navItems.map(function(item) {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={function(param) {
                  return 'nav-item' + (param.isActive ? ' active' : '')
                }}
                onClick={onClose}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar