import '../styles/MetricCards.css'

const metrics = [
  {
    label: 'Общий баланс',
    value: '84 320 сом',
    change: '↑ +2.4% за месяц',
    accent: true,
  },
  {
    label: 'Доходы',
    value: '32 000 сом',
    change: '↑ +8% vs прошлый',
    positive: true,
  },
  {
    label: 'Расходы',
    value: '17 640 сом',
    change: '— стабильно',
    neutral: true,
  },
]

function MetricCards() {
  return (
    <section className="metrics">
      {metrics.map(metric => (
        <div
          key={metric.label}
          className={`metric-card ${metric.accent ? 'accent' : ''}`}
        >
          <div className="metric-label">{metric.label}</div>
          <div className="metric-value">{metric.value}</div>
          <div className={`metric-change ${metric.positive ? 'positive' : ''} ${metric.neutral ? 'neutral' : ''}`}>
            {metric.change}
          </div>
        </div>
      ))}
    </section>
  )
}

export default MetricCards