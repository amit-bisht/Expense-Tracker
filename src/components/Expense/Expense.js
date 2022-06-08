import Card from '../UI/Card'
import './Expense.css'
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense=(props)=>{
    const [year,setYear]=useState('2020')
    const selectYearHandler=(year)=>{
        console.log(year)
        setYear(year)
      }
    const filteredExpense=props.expenses.filter(item=>item.date.getFullYear()==year)
    return(
            <Card className="expenses">
                <ExpenseFilter selected={year} onSelectYear={selectYearHandler}/>
                <ExpensesChart expense={filteredExpense}/>
                <ExpensesList filteredExpense={filteredExpense}/>
            </Card>
    )
}
export default Expense;