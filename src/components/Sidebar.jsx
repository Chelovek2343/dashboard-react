import '../styles/Sidebar.css'

const navItems = [
  { label: 'Dashboard', icon: '⊞' },
  { label: 'Транзакции', icon: '⇅' },
  { label: 'Карты', icon: '▭' },
  { label: 'Аналитика', icon: '∿' },
  { label: 'Настройки', icon: '⚙' },
]

function Sidebar({ activePage, onNavigate, isOpen, onClose }) {
  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <span className="logo-icon" />
          FinDash
        </div>
        <nav className="nav">
          {navItems.map(item => (

              key={item.label}
              href="#"
              className={`nav-item ${activePage === item.label ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(item.label)
                onClose()
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar