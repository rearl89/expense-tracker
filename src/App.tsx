import "./App.css";
import Form from "./component/Form";
import ExpenseList from "./component/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "PS5", amount: 700, category: "Entertainment" },
    { id: 2, description: "Milk", amount: 4, category: "Groceries" },
    {
      id: 3,
      description: "Electricity Bill",
      amount: 50,
      category: "Utilities",
    },
    { id: 4, description: "Water Bill", amount: 20, category: "Utilities" },
  ]);

  return (
    <>
      <Form />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
