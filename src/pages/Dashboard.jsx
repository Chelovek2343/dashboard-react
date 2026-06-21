import MetricCards from '../components/MetricCards'
import Transactions from '../components/Transactions'
import Overview from '../components/Overview'
import CurrencyRates from '../components/CurrencyRates'

function Dashboard() {
  return (
    <>
      <MetricCards />
      <section className="bottom-grid">
        <Transactions />
        <Overview />
      </section>
      <CurrencyRates />
    </>
  )
}

export default Dashboard