import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseChart from "./components/ExpenseChart";

import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expense, setexpense] = useState(dummy_expenses);

  const expensedatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    dummy_expenses.push(expenseData);
    setexpense([expenseData, ...dummy_expenses]);
  };

  const clickhandler = () => {
    const filteredExpenses = dummy_expenses.filter((exp) => {
      return exp.date.getFullYear().toString() === "2020";
    });
    setexpense(filteredExpenses);
  };

  const clickhandler2 = () => {
    const filteredExpenses = dummy_expenses.filter((exp) => {
      return exp.date.getFullYear().toString() === "2021";
    });
    setexpense(filteredExpenses);
  };

  const clickhandler3 = () => {
    const filteredExpenses = dummy_expenses.filter((exp) => {
      return exp.date.getFullYear().toString() === "2019";
    });
    setexpense(filteredExpenses);
  };

  return (
    <div>
      <button onClick={clickhandler}>Filter by 2020</button>
      <button onClick={clickhandler2}>Filter by 2021</button>
      <button onClick={clickhandler3}>Filter by 2019</button>
      <NewExpense onSaveExpense={expensedatahandler} />
      <ExpenseChart expenses={expense} />
      {expense.length === 0 ? (
        <p>No data from 2019</p>
      ) : (
        expense.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))
      )}
    </div>
  );
}

export default App;
