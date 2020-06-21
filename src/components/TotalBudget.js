import React, { useContext } from 'react'
import { ContextValue } from '../GlobalContext/GlobalData'

export const TotalBudget = () => {
    var d = new Date()
    var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    var n = month[d.getMonth()]
    var year = d.getFullYear()
    var date = d.getDate()

    const { Transcations } = useContext(ContextValue)
    
    const getAmont = () => {
        var total = 0

        for (var i = 0; i < Transcations.length; i++) {
            total = total + Transcations[i].amount
        }
        return (total)

    }

    return (
        <div>
            <div className="month-container">
                <div className="header fs-white">Your Budget</div>
                <div id="current-month" className="sub-text fs-white">{date} {n} {year}</div>
                <div className="budget-container p-2 mt-4">
                    <span id="month-budget" className="month-amount">$ {getAmont()}</span>
                </div>
            </div>

            <div className="chart-container">
                <canvas id="expense-chart"></canvas>
            </div>
        </div>
    )
}
export default TotalBudget