import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import MetricCards from './components/MetricCards'
import Transactions from './components/Transactions'
import Overview from './components/Overview'
import CurrencyRates from './components/CurrencyRates'
import './styles/App.css'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <main className="main">
        <Topbar onBurgerClick={() => setMenuOpen(prev => !prev)} />
        <MetricCards />
        <section className="bottom-grid">
          <Transactions />
          <Overview />
        </section>
        <CurrencyRates />
      </main>
    </div>
  )
}

export default App