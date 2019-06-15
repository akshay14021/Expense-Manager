import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
    const link = `/edit/${props.id}`
    return (
        <div>
            <Link to={link}><h3>{props.description}</h3></Link>
            <p>{props.amount} - {props.createdAt}</p>
        </div>
    );
};

export default connect()(ExpenseListItem);