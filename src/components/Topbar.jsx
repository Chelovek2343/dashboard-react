import '../styles/Topbar.css'

// eslint-disable-next-line react/prop-types
function Topbar({ onBurgerClick }) {
  return (
    <header className="topbar">
      <button className="burger" onClick={onBurgerClick} aria-label="Открыть меню">
        <span />
        <span />
        <span />
      </button>
      <h1 className="greeting">Добро пожаловать, Азиз</h1>
      <div className="avatar">АЖ</div>
    </header>
  )
}

export default Topbar