import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => {
    return (
        <div className="box-layout">  
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expense Manager</h1>
                <p>Manage your expenses</p>
                <button className="button" onClick={props.dispatch(startLogin)}>Login with Google</button>
            </div>
        </div>
    );
};

export default connect()(LoginPage);