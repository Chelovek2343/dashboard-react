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

function getInitials(name) {
  const parts = name.trim().split(' ').filter(Boolean)
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

const defaultProfile = {
  name: localStorage.getItem('profile_name') || 'Азиз Жакыпов',
  email: localStorage.getItem('profile_email') || 'aziz@example.com',
  phone: localStorage.getItem('profile_phone') || '+996 700 000 000',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profile, setProfile] = useState(defaultProfile)

  function handleProfileSave(newProfile) {
    setProfile(newProfile)
    localStorage.setItem('profile_name', newProfile.name)
    localStorage.setItem('profile_email', newProfile.email)
    localStorage.setItem('profile_phone', newProfile.phone)
  }

  return (
    <HashRouter>
      <div className="app">
        <Sidebar
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
        <main className="main">
          <Topbar
            name={profile.name}
            initials={getInitials(profile.name)}
            onBurgerClick={() => setMenuOpen(prev => !prev)}
          />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={
              <Settings profile={profile} onSave={handleProfileSave} />
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App