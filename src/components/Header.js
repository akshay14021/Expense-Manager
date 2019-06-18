import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = (props) => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
            <button onClick={props.dispatch(startLogout)}>Logout</button>
        </header>
    );
};

export default connect()(Header);