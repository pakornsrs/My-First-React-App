import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css'

function NewExpense(props){

    const GetSubmitterExpenseData =(submitterExpenseData) =>{
        const expenseData ={
            ...submitterExpenseData,
            id : Math.random().toString()
        }

        props.getNewExpenseData(expenseData)
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSubmitNewExpenseForm={GetSubmitterExpenseData}/>
        </div>
    )
}

export default NewExpense