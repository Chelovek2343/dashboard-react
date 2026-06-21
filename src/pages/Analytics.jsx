import '../styles/Analytics.css'

const months = [
  { month: 'Янв', income: 28000, expense: 15000 },
  { month: 'Фев', income: 28000, expense: 18000 },
  { month: 'Мар', income: 30000, expense: 14000 },
  { month: 'Апр', income: 28000, expense: 16000 },
  { month: 'Май', income: 32000, expense: 17000 },
  { month: 'Июн', income: 32000, expense: 17640 },
]

const max = 40000

function Analytics() {
  return (
    <div className="analytics-page">
      <h2 className="page-title">Аналитика</h2>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Доходы и расходы</h3>
          <div className="legend">
            <span className="legend-item income">Доходы</span>
            <span className="legend-item expense">Расходы</span>
          </div>
        </div>
        <div className="chart">
          {months.map(m => (
            <div key={m.month} className="chart-col">
              <div className="chart-bars">
                <div
                  className="bar income"
                  style={{ height: (m.income / max * 100) + '%' }}
                  title={m.income + ' сом'}
                />
                <div
                  className="bar expense"
                  style={{ height: (m.expense / max * 100) + '%' }}
                  title={m.expense + ' сом'}
                />
              </div>
              <span className="chart-label">{m.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analytics