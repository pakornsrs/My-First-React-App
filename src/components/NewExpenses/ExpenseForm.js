import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpensForm = (props) => {
  // Seperate state handdlering

  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  // Handle of multi parameter change with one useState !

  // const [userEntered,setUserEntered] = useState({
  //     enteredTitle : '',
  //     enteredAmount : '',
  //     enteredDate : ''
  // })

  const TitleChangeHandle = (event) => {
    setTitleEntered(event.target.value);

    // setUserEntered({
    //     ...userEntered,
    //     enteredTitle: event.target.value
    // })

    // setUserEntered((prevState)=>{
    //     return {...prevState, enteredTitle: event.target.value}
    // })
  };

  const AmountChangeHandle = (event) => {
    setAmountEntered(event.target.value);

    // setUserEntered({
    //     ...userEntered,
    //     enteredAmount: event.target.value
    // })

    // setUserEntered((prevState)=>{
    //     return {...prevState, enteredAmount: event.target.value}
    // })
  };

  const DateChangeHandle = (event) => {
    setDateEntered(event.target.value);

    // setUserEntered({
    //     ...userEntered,
    //     enteredDate: event.target.value
    // })

    // setUserEntered((prevState)=>{
    //     return {...prevState, enteredDate: event.target.value}
    // })
  };

  const onSubmitForm = (event) => {
    // prevent page reload when submit
    event.preventDefault();

    const expenseData = {
      title: titleEntered,
      amount: +amountEntered,
      date: new Date(dateEntered),
    };

    // if(expenseData.title == ''){
    //     alert('Enter title plase')
    //     return
    // }

    //communicate with parent component
    props.onSubmitNewExpenseForm(expenseData);

    // cleat value after submit
    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");

    // change hidden status
    OnAddNewButtonClick(hiddenForm)
  };

  const [hiddenForm,setHiddenForm] = useState(true)
    const OnAddNewButtonClick = (hiddenForm) =>{
        setHiddenForm(!hiddenForm)
    }

  return (
    <div>
      <form hidden={hiddenForm} onSubmit={onSubmitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={titleEntered}
              onChange={TitleChangeHandle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={amountEntered}
              min="0.01"
              step="0.01"
              onChange={AmountChangeHandle}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={dateEntered}
              onChange={DateChangeHandle}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
      <div>
        <button hidden={!hiddenForm} onClick={OnAddNewButtonClick}>Add New Expense</button>
      </div>
    </div>
  );
};

export default ExpensForm;
