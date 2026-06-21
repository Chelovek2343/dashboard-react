import { useState } from 'react'
import '../styles/Settings.css'

function Settings({ profile, onSave }) {
  const [form, setForm] = useState(profile)
  const [saved, setSaved] = useState(false)

  function handleChange(e) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    setSaved(false)
  }

  function handleSave() {
    onSave(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="settings-page">
      <h2 className="page-title">Настройки</h2>
      <div className="card">
        <div className="settings-section">
          <h3 className="settings-title">Профиль</h3>
          <div className="settings-field">
            <label className="settings-label">Имя</label>
            <input
              className="settings-input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="settings-field">
            <label className="settings-label">Email</label>
            <input
              className="settings-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="settings-field">
            <label className="settings-label">Телефон</label>
            <input
              className="settings-input"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="settings-actions">
            <button className="settings-btn" onClick={handleSave}>
              Сохранить изменения
            </button>
            {saved && (
              <span className="settings-success">✓ Изменения сохранены</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings