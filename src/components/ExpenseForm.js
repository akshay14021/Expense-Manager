import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class ExpenseForm extends Component {

    state = {
        description: this.props.expense ? this.props.expense.description : '',
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString(): '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState({ description })
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState({ note })
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount })
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({ createdAt })
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        if (this.state.amount && this.state.description) {
            this.props.onSubmit(this.state.description, parseInt(this.state.amount, 10) * 100, this.state.note, this.state.createdAt.valueOf())
            this.setState({ error: '' })
        } else {
            this.setState({error: 'Please provide description & amount'})
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused: focused })
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmitHandler}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Description" 
                    autoFocus 
                    value={this.state.description} 
                    onChange={this.onDescriptionChange}
                />
                <input
                    className="text-input" 
                    type="text" 
                    placeholder="Amount" 
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false }
                />
                <textarea
                    className="textarea" 
                    placeholder="Expense Note (Optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    {this.props.expense ? <button className="button">Edit Expense</button> : <button className="button" >Add Expense</button>}
                </div>
            </form>
        );
    }
}

export default ExpenseForm;