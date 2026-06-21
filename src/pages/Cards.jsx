import '../styles/Cards.css'

const cards = [
  { id: 1, type: 'Основная карта',     number: '**** **** **** 4231', balance: '43 120 сом', color: 'green' },
  { id: 2, type: 'Сберегательный счёт', number: '**** **** **** 8910', balance: '41 200 сом', color: 'dark' },
]

function Cards() {
  return (
    <div className="cards-page">
      <h2 className="page-title">Мои карты</h2>
      <div className="cards-list">
        {cards.map(card => (
          <div key={card.id} className={'bank-card ' + card.color}>
            <div className="bank-card-top">
              <span className="bank-card-type">{card.type}</span>
              <span className="bank-card-logo">FinDash</span>
            </div>
            <div className="bank-card-number">{card.number}</div>
            <div className="bank-card-bottom">
              <div>
                <div className="bank-card-label">Баланс</div>
                <div className="bank-card-balance">{card.balance}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards