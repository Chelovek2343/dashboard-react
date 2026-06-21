import '../styles/Topbar.css'

function Topbar({ name, initials, onBurgerClick }) {
  return (
    <header className="topbar">
      <button className="burger" onClick={onBurgerClick} aria-label="Открыть меню">
        <span />
        <span />
        <span />
      </button>
      <h1 className="greeting">Добро пожаловать, {name.split(' ')[0]}</h1>
      <div className="avatar">{initials}</div>
    </header>
  )
}

export default Topbar