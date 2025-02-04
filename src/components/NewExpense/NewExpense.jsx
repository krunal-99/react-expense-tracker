import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ fetchExpenses }) => {
  const formDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Date.now(),
    };
    fetchExpenses(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveFormData={formDataHandler} />
    </div>
  );
};

export default NewExpense;
