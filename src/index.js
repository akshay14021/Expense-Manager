import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore';
import firebase from './firebase/firebase';
import * as serviceWorker from './serviceWorker';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
}


ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()  
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            } 
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
