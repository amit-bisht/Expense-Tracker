import React,{useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button";

const NewExpense=(props)=>{
    const [displayForm,setDisplayForm]=useState(false)
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)
    }
    const displayHandler=()=>{
        setDisplayForm(!displayForm)
        console.log("triggered")
    }
    return(
        <div className="new-expense">
            {!displayForm && <Button onClick={displayHandler}>Add Expense</Button>}
            {displayForm && <ExpenseForm displayHandler={displayHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
}
export default NewExpense