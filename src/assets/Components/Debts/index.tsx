import './index.css'

export type TDebtsProps = {
    id?: number,
    description: string, 
    valuation: number,
    method: string,
    month: string
}

function Debts(props: TDebtsProps){
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