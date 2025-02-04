import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>February 4th 2025</div>
      <div className="expense-item__description">
        <h2>Learn React</h2>
        <div className="expense-item__price">₹ 300</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
