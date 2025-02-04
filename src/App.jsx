import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: 1, title: "Swiggy Order", amount: 850, date: new Date(2025, 1, 1) },
  { id: 2, title: "Uber Ride", amount: 320, date: new Date(2024, 1, 2) },
  {
    id: 3,
    title: "Amazon Shopping",
    amount: 2799,
    date: new Date(2023, 1, 3),
  },
  { id: 4, title: "Movie Tickets", amount: 500, date: new Date(2025, 1, 4) },
  { id: 5, title: "Zomato Dining", amount: 1200, date: new Date(2024, 1, 5) },
  {
    id: 6,
    title: "Electricity Bill",
    amount: 1450,
    date: new Date(2023, 1, 6),
  },
  {
    id: 7,
    title: "Mobile Recharge",
    amount: 599,
    date: new Date(2025, 1, 7),
  },
  {
    id: 8,
    title: "Spotify Subscription",
    amount: 119,
    date: new Date(2024, 1, 8),
  },
  {
    id: 9,
    title: "Gym Membership",
    amount: 2000,
    date: new Date(2023, 1, 9),
  },
  {
    id: 10,
    title: "Netflix Subscription",
    amount: 649,
    date: new Date(2025, 1, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const getAllExpenses = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };
  return (
    <>
      <NewExpense fetchExpenses={getAllExpenses} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
