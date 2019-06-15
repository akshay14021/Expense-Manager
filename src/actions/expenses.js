import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = (description = '', amount, note = '', createdAt = 0) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            amount,
            note,
            createdAt
        }
    }
}

//REMOVE_EXPENSE
export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

//EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}
