import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList=(props)=>{
    return(
        <ul className="expenses-list">
            {props.filteredExpense.length===0 && <h2 className="expenses-list__fallback">No Expense Found</h2>}
                {props.filteredExpense.length>0 && props.filteredExpense.map(item=><ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)}
        </ul>
    )
}
export default ExpensesList;