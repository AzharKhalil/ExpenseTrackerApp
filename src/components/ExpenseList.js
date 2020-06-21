import React, { useContext } from 'react'
import { ContextValue } from '../GlobalContext/GlobalData'
export const ExpenseList = () => {
    const { Transcations, deleteTrans} = useContext(ContextValue)
    
    
    return (
        
        <div>
            
            <div className="expense-list mt-4">

                <h3>History</h3>
                <ul className='list' id='list'>
                {Transcations.map(transObj => {
                        var sign = (transObj.amount > 0) ? '+' : '-'
                        return (
                            <div>

                                <li key={transObj.id}>
                                <a className="example_e" target="_blank" onClick={()=>{deleteTrans(transObj.id)}} >Remove</a>
                                    <span><h4>{transObj.text}</h4></span>
                                    <span className={(transObj.amount) <= 0 ? 'listcolor' : 'listcolor2'}><h4>{sign}${Math.abs(transObj.amount)}</h4></span>

                                </li>
                            </div>

                        )

                    })}
                    
                </ul>


            </div>
        </div>
    )
}
export default ExpenseList