import React from 'react'

function EditButton(props) {
    const expense = props.item
    const setExpense = props.setExpense
    const setIsEditing = props.setIsEditing
    const handleClick = () => {
        setIsEditing(true)
        setExpense(expense)

    }

    return(
        <React.Fragment>
            <button onClick={handleClick} className="btn btn-primary btn-sm mx-3">Edit</button>
        </React.Fragment>   
    )
}
export default EditButton