import firebase from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense = (description = '', amount, note = '', createdAt = 0) => {
    return (dispatch) => {
        return firebase.database().ref('expenses').push({ description, amount, note, createdAt }).then((ref) => {
            dispatch(addExpense({ id: ref.key, description, amount, note, createdAt }))
        })
    }
}

//REMOVE_EXPENSE
export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense = (id) => {
    return (dispatch) => {
       return firebase.database().ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id))
        })
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

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return firebase.database().ref(`expenses/${id}`).update({
            ...updates
        }).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

// SET_EXPENSES
export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
}

export const startSetExpenses = () => {
    return (dispatch) => {
        return firebase.database().ref('expenses').once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}
