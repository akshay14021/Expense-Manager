import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpesnePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    onSubmit={(description, amount, note, createdAt) => {
                        props.dispatch(startAddExpense(description, amount, note, createdAt))
                        props.history.push('/dashboard')
                    }}
                />
            </div>
        </div>
    );
};

export default connect()(AddExpesnePage);