import { useState } from 'react'
import '../styles/Transactions.css'

const allTransactions = [
  { id: 1,  name: 'Супермаркет Фрунзе', date: '19 июн 2026', amount: '-1 240 сом',  category: 'shopping', type: 'negative' },
  { id: 2,  name: 'Зарплата',           date: '18 июн 2026', amount: '+32 000 сом', category: 'income',   type: 'positive' },
  { id: 3,  name: 'Мегаком',            date: '17 июн 2026', amount: '-300 сом',    category: 'mobile',   type: 'negative' },
  { id: 4,  name: 'Аренда квартиры',    date: '15 июн 2026', amount: '-12 000 сом', category: 'housing',  type: 'negative' },
  { id: 5,  name: 'Книжный магазин',    date: '13 июн 2026', amount: '-450 сом',    category: 'shopping', type: 'negative' },
  { id: 6,  name: 'Кафе Navigare',      date: '12 июн 2026', amount: '-850 сом',    category: 'food',     type: 'negative' },
  { id: 7,  name: 'Фриланс проект',     date: '10 июн 2026', amount: '+15 000 сом', category: 'income',   type: 'positive' },
  { id: 8,  name: 'Аптека',             date: '9 июн 2026',  amount: '-620 сом',    category: 'health',   type: 'negative' },
  { id: 9,  name: 'Кинотеатр',          date: '7 июн 2026',  amount: '-400 сом',    category: 'shopping', type: 'negative' },
  { id: 10, name: 'Интернет Megaline',  date: '5 июн 2026',  amount: '-650 сом',    category: 'mobile',   type: 'negative' },
]

const filters = [
  { label: 'Все',      value: 'all' },
  { label: 'Доходы',   value: 'income' },
  { label: 'Покупки',  value: 'shopping' },
  { label: 'Жильё',    value: 'housing' },
  { label: 'Связь',    value: 'mobile' },
  { label: 'Еда',      value: 'food' },
  { label: 'Здоровье', value: 'health' },
]

const icons = {
  shopping: '🛍',
  income:   '💼',
  mobile:   '📱',
  housing:  '🏠',
  food:     '🍽',
  health:   '💊',
}

function TransactionsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = allTransactions.filter(tx =>
    activeFilter === 'all' ? true : tx.category === activeFilter
  )

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Все транзакции</h2>
        <div className="filters">
          {filters.map(f => (
            <button
              key={f.value}
              className={'filter-btn' + (activeFilter === f.value ? ' active' : '')}
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
            <div className={'tx-icon ' + tx.category}>
              {icons[tx.category]}
            </div>
            <div className="tx-info">
              <span className="tx-name">{tx.name}</span>
              <span className="tx-date">{tx.date}</span>
            </div>
            <span className={'tx-amount ' + tx.type}>{tx.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionsPage