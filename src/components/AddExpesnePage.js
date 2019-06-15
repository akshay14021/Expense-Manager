import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpesnePage = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={(description, amount, note, createdAt) => {
                    props.dispatch(addExpense(description, amount, note, createdAt))
                    props.history.push('/')
                }}
            />
        </div>
    );
};

export default connect()(AddExpesnePage);