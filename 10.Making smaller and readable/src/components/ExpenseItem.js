import "./ExpenseItem.css";

// import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails.js";
// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <ExpenseDate date={props.date} />
//       <ExpenseDetails title={props.title} />
//       <ExpenseDetails amount={props.amount} />
//     </div>
//   );
// }import './ExpenseItems.css'

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="">
        <h2>{props.LocationOfExpenditure}</h2>
      </div>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
      </div>

      <ExpenseDetails amount={props.amount}></ExpenseDetails>
    </div>
  );
}
export default ExpenseItem;
