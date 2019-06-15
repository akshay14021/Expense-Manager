import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import { addExpense} from './actions/expenses';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

store.dispatch(addExpense('Water bill', 54500, 'Water bill for February', 1000))
store.dispatch(addExpense('Gas bill', 200, 'Gas bill for February', 9000))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
