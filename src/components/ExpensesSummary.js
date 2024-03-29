import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/getVisibleExpenses';
import expensesTotal from '../selectors/expenseTotal';

const ExpensesSummary = (props) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{props.numberOfExpenses}</span> {props.numberOfExpenses === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(props.expenseTotal / 100).format('$0,0.00')}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

    return {
        expenseTotal: expensesTotal(visibleExpenses),
        numberOfExpenses: visibleExpenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary);