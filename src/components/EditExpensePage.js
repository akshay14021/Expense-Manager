import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(description, amount, note, createdAt) => {
                    props.dispatch(startEditExpense(props.expense.id, { description, amount, note, createdAt }))   
                    props.history.push('/')                 
                }}
            />
            <button onClick={(e) => {
                props.dispatch(startRemoveExpense(props.expense.id))
                props.history.push('/')
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)