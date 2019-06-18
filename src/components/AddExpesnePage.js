import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpesnePage = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={(description, amount, note, createdAt) => {
                    props.dispatch(startAddExpense(description, amount, note, createdAt))
                    props.history.push('/dashboard')
                }}
            />
        </div>
    );
};

export default connect()(AddExpesnePage);