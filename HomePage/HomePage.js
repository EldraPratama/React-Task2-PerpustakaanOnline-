import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, bookActions, transactionActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.getBooks();
        this.props.getTransactions();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        console.log(this.props);
        return (
            <div className="col-md-12">
                <div className="row justify-content-center">
                    {/* <img src="https://images.app.goo.gl/yXnHGJgL9zSH3NnD8" alt="Perpustakaan"/> */}
                    <h1 className="text-center">Selamat Datang di Perpustakaan Online</h1>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    console.log(state);
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    getBooks: bookActions.getAll,
    getTransactions: transactionActions.getAll,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };