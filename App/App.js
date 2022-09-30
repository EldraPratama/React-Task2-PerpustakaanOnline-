import React from 'react';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { BukuPage } from '../BukuPage';
import { AddPage } from '../BukuPage';
import { EditPage } from '../BukuPage';
import { DetailPage } from '../BukuPage';
import { TransaksiPage } from '../TransaksiPage';
import { AddTransaksi } from '../TransaksiPage';
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
    let path = history.location.pathname;
    let useNavbar = true;



    if (path == '/login' || path == '/register') {
      useNavbar = false;
    }
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div class="container-fluid">
            {/* <a class="navbar-brand " href="#">
              Perpustakaan Online
            </a> */}
            <Router history={history}>
              <Link to="/" class="navbar-brand">
                Perpustakaan Online
              </Link>
            </Router>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <Router history={history}>
                  {useNavbar ? (
                    <>
                      <li class="nav-item">
                        <Link to="/buku" class="nav-link">
                          Data Buku
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/transaksi" class="nav-link">
                          Transaksi
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/login" class="nav-link">
                          Logout
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li class="nav-item">
                      <Link to="/login" class="nav-link">
                        Login
                      </Link>
                    </li>
                  )}
                </Router>
              </ul>
            </div>
          </div>
        </nav>

        {/* <div className="jumbotron"> */}
        <div className="container" height="1200px">
          <div className="col-12 col-offset-2">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route exact path="/buku" component={BukuPage} />
                <Route path="/buku/add" component={AddPage} />
                <Route exact path="/buku/detail/:id" component={DetailPage} />
                <Route exact path="/buku/edit/:id" component={EditPage} />
                <Route exact path="/transaksi" component={TransaksiPage} />
                <Route path="/transaksi/add" component={AddTransaksi} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
