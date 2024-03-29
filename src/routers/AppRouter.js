import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpesnePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory()

const AppRouter = (props) => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                    <PrivateRoute path="/create" component={AddExpensePage} />
                    <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;