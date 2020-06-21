import React, { useState, useContext } from 'react'
import { ContextValue } from '../GlobalContext/GlobalData'


export const FormControl = () => {
    const { addtrans } = useContext(ContextValue)
    const [text, setText] = useState("")
    const [value, setValue] = useState(0)
    

    const eventHandler = (e) => {

        
        e.preventDefault()
        addtrans({
            id:Math.floor(Math.random()*100),
            text: text,
            amount: Number(value)
        })
    }
    return (
        <div>
            
            <form id='myForm' onSubmit={eventHandler}>
                <div className="row mt-4">
                    <div className="col-7">

                        <input id='desc' className="form-control input-expense-description" type="text" placeholder="Description" value={text} onChange={(event) => { setText(event.target.value) }}></input>
                    </div>
                    <div className="col-4">
                    
                        <input id='input' className="form-control input-expense-value" type="number" placeholder="-ve - expense, +ve - income"  onChange={(event) => { setValue(event.target.value) }} ></input>
                    </div>
                    <div className="col-1">
                        <button type="submit" className="btn btn-success btn-submit-expense"><span>&#10003;</span></button>
                    </div>

                </div>
            </form>
        </div>
    )
}
export default FormControl