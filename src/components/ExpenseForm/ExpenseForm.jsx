import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveFormData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const changeAmountHandler = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  const changeDateHandler = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = { title, amount, date: new Date(date) };
    onSaveFormData(expenseData);
    setAmount("");
    setDate("");
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={changeDateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
