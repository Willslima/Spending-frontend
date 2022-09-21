import { useEffect, useState } from 'react'
import './index.css'

import Debts from '../Debts'

function display() {

  const [debts, setDebts] = useState([{
    description: 'Marketplace',
    valuation: 150,
    method: 'Nubank',
    month: '16/09/2022'
  }]);

  useEffect(() => {
    fetch('http://localhost:3000/debts')
    .then(response => response.json())
    .then(data => { 
      setDebts(data)
  })
    })

  return (
    <div className="display">
      <h3>Spending of the month</h3>
      <div className="content">
        <div>
          <h4>September</h4>
          {debts.map(debt =>(
           <Debts 
              key={debt.id}
              description={debt.description}
              valuation={debt.valuation}
              method={debt.method}
              month={debt.month}
             />
          ))}
        </div>
      </div>
    </div>
  )
}

export default display
