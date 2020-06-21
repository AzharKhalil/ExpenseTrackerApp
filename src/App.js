import React from 'react';
import TotalBudget from './components/TotalBudget'

import Header from './components/Header'
import TS from './components/TS'
import FormControl from './components/FormControl'
import ExpenseList from './components/ExpenseList'
import { GlobalProvider } from './GlobalContext/GlobalData'
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className='row'>
      <div className="col-4 left-container">
      <TotalBudget />
      </div>

      <div className="col-8 right-container">
        <div className="calc-container">
          <Header />
        
          <TS/>
          <FormControl/>
          <ExpenseList/>
        </div>

      </div>

    </div>
    </GlobalProvider>


  );
}

export default App;
