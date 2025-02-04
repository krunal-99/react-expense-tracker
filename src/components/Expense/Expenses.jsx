import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2025");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      />
      <ExpenseItem
        title={props.items[5].title}
        amount={props.items[5].amount}
        date={props.items[5].date}
      />
      <ExpenseItem
        title={props.items[6].title}
        amount={props.items[6].amount}
        date={props.items[6].date}
      />
      <ExpenseItem
        title={props.items[7].title}
        amount={props.items[7].amount}
        date={props.items[7].date}
      />
      <ExpenseItem
        title={props.items[8].title}
        amount={props.items[8].amount}
        date={props.items[8].date}
      />
      <ExpenseItem
        title={props.items[9].title}
        amount={props.items[9].amount}
        date={props.items[9].date}
      />
    </Card>
  );
};

export default Expenses;
