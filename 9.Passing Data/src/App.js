import ExpenseItems from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      LocationOfExpenditure: "home",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      LocationOfExpenditure: "appliances",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      LocationOfExpenditure: "on car",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      LocationOfExpenditure: "furniture",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Expense Items</h2>
      {expenses.map((expense) => (
        <ExpenseItems
          title={expense.title}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItems>
      ))}
    </div>
  );
}
export default App;