import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => {
    const link = `/edit/${props.id}`
    return (
        <div>
            <Link to={link}><h3>{props.description}</h3></Link>
            <p>
                {numeral(props.amount / 100).format('$0,0.00')} 
                - 
                {moment(props.createdAt).format('MMMM Do, YYYY')}
            </p>
        </div>
    );
};

export default connect()(ExpenseListItem);