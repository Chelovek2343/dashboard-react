import '../styles/Overview.css'

function Overview() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Быстрый обзор</h2>
      </div>
      <ul className="overview-list">
        <li className="overview-item">
          <span className="overview-label">Сберегательный</span>
          <span className="overview-value">41 200 сом</span>
        </li>
        <li className="overview-item">
          <span className="overview-label">Кредит</span>
          <span className="overview-value warning">23 000 сом</span>
        </li>
        <li className="overview-item">
          <span className="overview-label">Цель за месяц</span>
          <div className="overview-right">
            <span className="overview-value">68%</span>
            <span className="badge green">в норме</span>
          </div>
        </li>
        <li className="overview-item">
          <span className="overview-label">Статус карты</span>
          <span className="badge green">Активна</span>
        </li>
      </ul>
    </div>
  )
}

export default Overview