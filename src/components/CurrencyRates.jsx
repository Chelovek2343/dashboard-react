import { useState, useEffect } from 'react'
import '../styles/CurrencyRates.css'

const currencies = [
  { code: 'USD', flag: '🇺🇸', name: 'Доллар США' },
  { code: 'EUR', flag: '🇪🇺', name: 'Евро' },
  { code: 'RUB', flag: '🇷🇺', name: 'Рос. рубль' },
  { code: 'KZT', flag: '🇰🇿', name: 'Казах. тенге' },
]

function CurrencyRates() {
  const [rates, setRates] = useState([])
  const [updated, setUpdated] = useState('загрузка...')
  const [loading, setLoading] = useState(true)

  async function fetchRates() {
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/KGS')
      const data = await res.json()

      const parsed = currencies.map(cur => ({
        ...cur,
        rate: (1 / data.rates[cur.code]).toFixed(2)
      }))

      setRates(parsed)

      const now = new Date()
      const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      setUpdated(`обновлено в ${time}`)
      setLoading(false)
    } catch (err) {
      setUpdated('не удалось загрузить')
      setLoading(false)
      console.error('Ошибка загрузки курсов:', err)
    }
  }

  useEffect(() => {
    fetchRates()

    // автообновление каждые 30 секунд
    const interval = setInterval(fetchRates, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="rates-section">
      <div className="rates-header">
        <h2 className="card-title">Курсы валют</h2>
        <span className="rates-updated">{updated}</span>
      </div>
      <div className="rates-grid">
        {loading
          ? Array(4).fill(null).map((_, i) => (
              <div key={i} className="rate-card skeleton" />
            ))
          : rates.map(cur => (
              <div key={cur.code} className="rate-card">
                <span className="rate-flag">{cur.flag}</span>
                <span className="rate-code">{cur.code}</span>
                <span className="rate-value">
                  {cur.rate}
                  <small> сом</small>
                </span>
                <span className="rate-label">{cur.name}</span>
              </div>
            ))
        }
      </div>
    </section>
  )
}

export default CurrencyRates