import "./App.css";
import Form from "./component/Form";
import ExpenseList from "./component/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./component/ExpenseFilter";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([
    // { id: 1, description: "PS5", amount: 700, category: "Entertainment" },
    // { id: 2, description: "Milk", amount: 4, category: "Groceries" },
    // {
    //   id: 3,
    //   description: "Electricity Bill",
    //   amount: 50,
    //   category: "Utilities",
    // },
    // { id: 4, description: "Water Bill", amount: 20, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <Form
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <div className="mb-3 mt-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
