import React from 'react';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        // Decide to show the navbar
        let path = history.location.pathname
        let useNavbar = true;

        if(path == "/login" || path == "/register"){
            useNavbar = false;
        }
        return (
            <>
                { useNavbar &&
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
                    <div class="container-fluid">
                        <a class="navbar-brand " href="#">Perpustakaan Online</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        
                            <Router history={history}>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link">Data Buku</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link">Transaksi</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link">Logout</Link>
                            </li>
                            </Router>
                        </ul>
                        </div>
                    </div>
                </nav>
                }

                <div className="jumbotron">
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                            <Router history={history}>
                                <Switch>
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <Route path="/login" component={LoginPage} />
                                    <Route path="/register" component={RegisterPage} />
                                    <Redirect from="*" to="/" />
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };