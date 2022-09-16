import './index.css'

import Debts from '../Debts'

function display() {
  const dbt = [
    {
      description: 'Marketplace',
      valuation: 150,
      method: 'Nubank',
      month: '16/09/2022'
    },
    {
      description: 'Marketplace',
      valuation: 150,
      method: 'Santander',
      month: '16/09/2022'
    },
    {
      description: 'Marketplace',
      valuation: 150,
      method: 'Pix',
      month: '16/09/2022'
    }
  ]

  return (
    <div className="display">
      <h3>Spending of the month</h3>
      <div className="content">
        <div>
          <h4>September</h4>
          {dbt.map(db => (
            <Debts
              description={db.description}
              valuation={db.valuation}
              method={db.method}
              month={db.month}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default display
