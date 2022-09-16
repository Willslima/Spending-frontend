import './index.css'

function Debts(props){
    return (
        <div className='debts'>
            <ul>
            <li>Description: {props.description}</li>
            <li><span>Valuation: ${props.valuation}</span> <span>Payment method: {props.method}</span></li>
            <li>Date: {props.month}</li>
          </ul>
        </div>
    )
}

export default Debts