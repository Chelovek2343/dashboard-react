import { useState } from 'react'
import '../styles/Transactions.css'

const transactions = [
  { id: 1, name: 'Супермаркет Фрунзе', date: '19 июн 2026', amount: '-1 240 сом', category: 'shopping', type: 'negative' },
  { id: 2, name: 'Зарплата',           date: '18 июн 2026', amount: '+32 000 сом', category: 'income',   type: 'positive' },
  { id: 3, name: 'Мегаком',            date: '17 июн 2026', amount: '-300 сом',    category: 'mobile',   type: 'negative' },
  { id: 4, name: 'Аренда квартиры',    date: '15 июн 2026', amount: '-12 000 сом', category: 'housing',  type: 'negative' },
  { id: 5, name: 'Книжный магазин',    date: '13 июн 2026', amount: '-450 сом',    category: 'shopping', type: 'negative' },
]

const filters = [
  { label: 'Все',      value: 'all' },
  { label: 'Доходы',   value: 'income' },
  { label: 'Покупки',  value: 'shopping' },
  { label: 'Жильё',    value: 'housing' },
  { label: 'Связь',    value: 'mobile' },
]

const icons = {
  shopping: '🛍',
  income:   '💼',
  mobile:   '📱',
  housing:  '🏠',
}

function Transactions() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = transactions.filter(tx =>
    activeFilter === 'all' ? true : tx.category === activeFilter
  )

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Последние транзакции</h2>
        <div className="filters">
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <ul className="tx-list">
        {filtered.map(tx => (
          <li key={tx.id} className="tx-item">
            <div className={`tx-icon ${tx.category}`}>
              {icons[tx.category]}
            </div>
            <div className="tx-info">
              <span className="tx-name">{tx.name}</span>
              <span className="tx-date">{tx.date}</span>
            </div>
            <span className={`tx-amount ${tx.type}`}>{tx.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Transactions