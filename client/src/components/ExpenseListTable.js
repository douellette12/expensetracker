import React from 'react'
import DeleteButton from './DeleteButton'
//import EditButton from './EditButton'

function ExpenseListTable(props) {
    //const setExpense = props.setExpense
    const expenseList = props.expenseList
    const setExpenseList = props.setExpenseList
    //const setIsEditing = props.setIsEditing
    return(
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    expenseList.length !== 0 ? expenseList.map((item, index) => {
                        return(
                        <tr key={index}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {new Date(item.date).toDateString()}
                            </td>
                            <td>
                                {typeof item.amount === 'object' ? `$${item.amount.$numberDecimal}` : `$${item.amount}`}                                                                
                            </td>
                            <td>
                                <DeleteButton
                                    ID={item._id}
                                    setExpenseList={setExpenseList} 
                                    expenseList={expenseList}
                                    item={item}
                                    
                                />
                            </td>
                        </tr>
                        )})
                    : <tr key="NoExpenseItemsInList">
                            <td colSpan="3">No expense items added yet!</td>
                         </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseListTable