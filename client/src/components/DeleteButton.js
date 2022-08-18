import React from 'react'

function DeleteButton(props) {
    const objID = props.ID
    const expenseList = props.expenseList
    const expense = props.item
    const setExpenseList = props.setExpenseList
    const handleClick = async () => {

        const response = await fetch(`http://localhost:4001/delete`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({_id: objID})
        })
        response.text()
        setExpenseList(expenseList.filter(item => item !== expense))
    }
    return(
        <React.Fragment>
            <button onClick={handleClick} className="btn btn-danger btn-sm">Delete</button>
        </React.Fragment>
    )
}

export default DeleteButton