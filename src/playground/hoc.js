// Higher Order Component - A Component which render other components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The infor is: {props.info}</p>
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <p>This is private info. Please do not share</p>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo info="There are the details"/>, document.getElementById('app'))