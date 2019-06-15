import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/getVisibleExpenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {   props.expenses.length === 0 ? 
                <div>
                    <span>No expenses</span>
                </div> :
                
                props.expenses.map((expense) => {
                    return <ExpenseListItem
                        key={expense.id}
                        description={expense.description}
                        amount={expense.amount}
                        createdAt={expense.createdAt}
                        id={expense.id}
                    />
                })
                
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);