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
        const { user, users, books, transactions } = this.props;

        //make variable to store total book, total book dipinjam, total book tersedia
        let totalBooks, booksTersedia, booksDipinjam;
        if(books.items){
            totalBooks    = books.items.length
            booksDipinjam = books.items.filter(book => { return book.status == 'Dipinjam'; }).length
            booksTersedia = books.items.filter(book => { return book.status == 'Tersedia'; }).length
            console.log(totalBooks)
            console.log(booksDipinjam)
            console.log(booksTersedia)
        }

        //make variable to store total transaction, total transaction dipinjam, total transaction tersedia
        let totalTransactions, transactionsDipinjam, transactionsDikembalikan
        if(transactions.items){
            totalTransactions = transactions.items.length
            transactionsDipinjam = transactions.items.filter(data => { return data.tanggalKembali == ''; }).length;
            transactionsDikembalikan = transactions.items.filter(data => { return data.tanggalKembali != ''; }).length;
            console.log(totalTransactions)
            console.log(transactionsDipinjam)
            console.log(transactionsDikembalikan)
        }
        console.log(this.props);
        // console.log(books);
        // console.log(transactions);
        return (
            books.items && transactions.items
            ?
                <div className="col-md-12">
                    <div className="row justify-content-center">
                        {/* <img src="https://images.app.goo.gl/yXnHGJgL9zSH3NnD8" alt="Perpustakaan"/> */}
                        <h1 className="text-center">Selamat Datang di Perpustakaan Online</h1>
                        <div className="row mt-5">
                            <div className="col-sm-6">
                                <div className="card ">
                                    <div className="card-body text-center">
                                        <h3 className="card-title">Total data Buku</h3>
                                        <h4 className="card-title">{totalBooks}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h3 className="card-title">Total data Transaksi</h3>
                                        <h4 className="card-title">{totalTransactions}</h4>      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-1">
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Status Buku Tersedia</h4>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Status Buku Dipinjam</h4>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Buku masih Dipinjam</h4>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Buku sudah Dikembalikan</h4>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            :
                //show spinner 
                <div className="m-5">
                    <div className="text-center">
                    <div className="spinner-grow text-primary mx-4" role="status"></div>
                    <div className="spinner-grow text-success mx-4" role="status"></div>
                    <div className="spinner-grow text-danger mx-4" role="status"></div>
                    <div className="spinner-grow text-warning mx-4" role="status"></div>
                    </div>
                </div>
        );
    }
}

function mapState(state) {
    console.log(state);
    const { users, authentication, books, transactions } = state;
    const { user } = authentication;
    return { user, users, books, transactions };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    getBooks: bookActions.getAll,
    getTransactions: transactionActions.getAll,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };