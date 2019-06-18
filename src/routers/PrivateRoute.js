import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = (props) => {
    return (
        props.authId ? <div>
            <Header /> 
            <Route {...props} />
        </div> : <Redirect to="/" />
    );
};

const mapStateToProps = (state) => {
    return {
        authId: state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute);