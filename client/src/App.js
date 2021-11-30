import ExpenseForm from "./components/ExpenseForm";
import ExpenseListTable from "./components/ExpenseListTable";
import { useState, useEffect } from 'react'

function App() {
  const [expenseList, setExpenseList] = useState([])
  const [expense, setExpense] = useState({
    name: '',
    date: '',
    amount: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  useEffect(() => {
      const fetchData = async () => {
        await fetch("http://localhost:4001/")
        .then(response => response.json())
        .then(data => setExpenseList(data))
        .catch(err => console.log(err))
      }
      fetchData()
  }, [])

  return (
    <div>
      <div className="text-center">
        <h1 className="display-4 mt-4">Expense Tracker</h1>
        <h3 className="text-success">Add A New Item:</h3>
      </div>
      <ExpenseForm 
        expense={expense} 
        setExpense={setExpense} 
        setExpenseList={setExpenseList} 
        expenseList={expenseList} 
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <ExpenseListTable 
        expense={expense}
        setExpense={setExpense}
        expenseList={expenseList} 
        setExpenseList={setExpenseList}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export default App;
