import React from 'react'

function ExpenseForm(props) {
    const expense = props.expense
    const setExpense = props.setExpense
    const setExpenseList = props.setExpenseList
    const expenseList = props.expenseList
    //const isEditing = props.isEditing
    //const setIsEditing = props.setIsEditing

    const handleChange = (event) => {
        const value = event.target.value
        const exp = Object.assign({}, expense, {[event.target.name]: value})
        setExpense(exp)
    }
    const handleSubmit = async (event) => {
        var url = 'http://localhost:4001'
        event.preventDefault()        
        const response = await fetch(url, 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(expense)
            })
            response.json()
            setExpenseList(expenseList.concat(expense))
            setExpense({
                name: '',
                date: '',
                amount: ''
            })
    }
        
    return(
        <div className="container">
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input className="form-control" 
                            id="name" 
                            name="name" 
                            value={expense.name} 
                            type="text" 
                            placeholder="Expense"
                            onChange={handleChange}/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="date" 
                            className="form-control"
                            id="date"
                            name="date"
                            value={expense.date} 
                            onChange={handleChange}/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="number" 
                            className="form-control" 
                            placeholder="$"
                            id="amount"
                            name="amount"
                            value={expense.amount} 
                            onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-success mb-3">Add Expense</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ExpenseForm