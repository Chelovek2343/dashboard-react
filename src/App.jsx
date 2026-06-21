import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import TransactionsPage from './pages/Transactions'
import Cards from './pages/Cards'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import './styles/App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
        <main className="main">
          <Topbar onBurgerClick={() => setMenuOpen(prev => !prev)} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App