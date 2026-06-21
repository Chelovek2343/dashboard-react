import '../styles/Settings.css'

function Settings() {
  return (
    <div className="settings-page">
      <h2 className="page-title">Настройки</h2>
      <div className="card">
        <div className="settings-section">
          <h3 className="settings-title">Профиль</h3>
          <div className="settings-field">
            <label className="settings-label">Имя</label>
            <input className="settings-input" type="text" defaultValue="Азиз Жакыпов" />
          </div>
          <div className="settings-field">
            <label className="settings-label">Email</label>
            <input className="settings-input" type="email" defaultValue="aziz@example.com" />
          </div>
          <div className="settings-field">
            <label className="settings-label">Телефон</label>
            <input className="settings-input" type="tel" defaultValue="+996 700 000 000" />
          </div>
          <button className="settings-btn">Сохранить изменения</button>
        </div>
      </div>
    </div>
  )
}

export default Settings