import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { transactionActions } from '../_actions';

class TransaksiPage extends React.Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    // console.log(this.props)
    const { user, users, transactions } = this.props;
    // const transaction = this.props.transactions.items;
    console.log(transactions)
    return (
      transactions.items
      ?
        <div className="col-lg">
          <h2>Transaksi Peminjaman dan Pengembalian</h2>
          <div className="row mb-3">
            <div className="col-md-5">
              <form name="form">
                  <div className={'form-group'}>
                      <input type="text" className="form-control" name="search" placeholder="Search"/>
                  </div>
              </form>
            </div>
            <div className="col-md-5"></div>
            <div className="col-md-2">
                <Link to="/transaksi/add" className="btn btn-primary float-end">Pinjam Buku</Link>
            </div>
          </div>
          <table class="table table-bordered ">
            <thead class="table-primary">
              <tr>
                <th scope="col">Judul Buku</th>
                <th scope="col">Nama Peminjam</th>
                <th scope="col">Tanggal Pinjam</th>
                <th scope="col">Estimasi Pengembalian</th>
                <th scope="col">Tanggal Kembali</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            {transactions.items && 
                //show data without filter search
                <tbody>
                  {transactions.items.map((transaction, index) =>
                      <tr key={transaction.id}>
                          <td>{transaction.judulBuku}</td>
                          <td>{transaction.peminjam}</td>
                          <td>{transaction.tanggalPinjam}</td>
                          <td>{transaction.estimasiPengembalian}</td>
                          <td>{transaction.tanggalKembali}</td>
                          {/* <td>{transaction.jenisBuku}</td>
                          <td width="20%">
                            <center>  
                              <Link to={`/buku/detail/${transaction.id}`}  className="btn btn-sm btn-link mx-1">
                                  Detail
                              </Link>
                              <Link to={`/buku/edit/${transaction.id}`}  className="btn btn-sm btn-link mx-1">
                                  Edit
                              </Link>
                              { transaction.status == 'Tersedia' || transaction.status == 'tersedia'
                                ? <a onClick={this.handleDeletetransaction(transaction.id)} className="btn btn-sm btn-link mx-1">Delete</a>
                                : ''
                              }
                            </center>
                          </td> */}
                      </tr>
                  )}
                  {transactions.items.length == 0 &&
                    <tr>
                      <td colspan="5"><center><b>Book data not available</b></center> </td>
                    </tr>
                  }
              </tbody>
            }
          </table>

        </div>
      :
        <div></div>
    );
  }
}

function mapState(state) {
  // console.log(state);
  const { users, authentication, transactions } = state;
  const { user } = authentication;
  return { user, users, transactions };
}

const actionCreators = {
  getTransactions: transactionActions.getAll,
  // deleteUser: transactionActions.delete,
};

const connectedTransaksiPage = connect(mapState, actionCreators)(TransaksiPage);
export { connectedTransaksiPage as TransaksiPage };
