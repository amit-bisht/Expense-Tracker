import React from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react';
import './App.css'

function App() {
  const dummyExpense=[
    
  ]
  const [expenses,setExpenses]=useState(dummyExpense);
  console.log(expenses)
  const saveExpenseDataHandler=(enteredExpense)=>{
    setExpenses((prevState)=>{
      return([enteredExpense,...prevState])
    })
    console.log(expenses)
  }
  
  return (
    <React.Fragment>
      <h2 className='header'>Expense Tracker</h2>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}/>
      <Expense expenses={expenses}/>
    </React.Fragment>
  );
}

export default App;
