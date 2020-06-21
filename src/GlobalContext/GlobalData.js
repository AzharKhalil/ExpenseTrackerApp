import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialstate ={
    transcations:[
        
   
    ]
}



export const ContextValue = createContext(initialstate)



//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate)
    //actions
    const addtrans = (Obj) => {
        
        dispatch({
            type: 'ADD_DATA',
            payload: (Obj)
        })
    
    }
    const deleteTrans = (id) => {
        
        dispatch({
            type: 'DEL_TRANS',
            payload:id
        })
    }
    
    

    return (

        <ContextValue.Provider value={{
            Transcations: state.transcations,
            addtrans: addtrans,
            deleteTrans:deleteTrans


        }}>
            {children}
        </ContextValue.Provider>

    );


}


