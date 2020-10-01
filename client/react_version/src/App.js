import React, {useState} from 'react';
import {BudgetProvider} from './useContexts/BudgetProvider'
import Budgets from './components/Budgets'
import CreateBudget from './components/CreateBudget'
import 'antd/dist/antd.css'
function App() {

  
  return (
    <div className='container' style={{width: '300px'}}>
    <BudgetProvider>
      <Budgets/>
      <CreateBudget/>
    </BudgetProvider>
    </div>
  );
  

}

export default App;
