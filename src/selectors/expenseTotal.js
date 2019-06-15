const expensesTotal = (expenses) => {
    let total = 0
    if (expenses.length === 0) {
        return 0
    } else {
        expenses.forEach((expense) => {
            total = total + expense.amount 
        })
    }
    return total
}

export default (expensesTotal);