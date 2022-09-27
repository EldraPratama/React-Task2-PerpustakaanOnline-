import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { transactionActions } from '../_actions';

class TransaksiPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search:'',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      search: value
    });
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  handlePengembalianTransaction(id) {
    return (e) => this.props.update(id);
  }

  render() {
    // console.log(this.props)
    // const transaction = this.props.transactions.items;
    const { user, users, transactions } = this.props;
    // console.log(transactions);
    let filtered ;
    let valueSearch = this.state.search.toLowerCase();
    if(transactions.items){
      filtered = transactions.items.filter(transaction => transaction.judulBuku.toLowerCase().includes(valueSearch));
      console.log(filtered);
    }
    return (
      transactions.items
      ?
        <div className="col-lg">
          <h2>Transaksi Peminjaman dan Pengembalian</h2>
          <div className="row mb-3">
            <div className="col-md-5">
              <form name="form">
                  <div className={'form-group'}>
                      <input type="text" className="form-control" name="search" placeholder="Search"
                      onChange={this.handleChange}/>
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
                <th scope="col"><center>Judul Buku </center></th>
                <th scope="col"><center>Nama Peminjam </center></th>
                <th scope="col"><center>Tanggal Pinjam </center></th>
                <th scope="col"><center>Estimasi Pengembalian </center></th>
                <th scope="col"><center>Tanggal Kembali </center></th>
                <th scope="col"><center> Actions </center></th>
              </tr>
            </thead>

            {/* show data */}
            {transactions.items && 
              valueSearch !=''
              //show data with filter search
              ?
                <tbody>
                  {filtered.map((transaction, index) =>
                    <tr key={transaction.id}>
                      <td><center>{transaction.judulBuku}</center></td>
                      <td><center>{transaction.peminjam}</center></td>
                      <td><center>{transaction.tanggalPinjam}</center></td>
                      <td><center>{transaction.estimasiPengembalian}</center></td>
                      <td><center> {transaction.tanggalKembali ? transaction.tanggalKembali : "-"} </center></td>
                      <td width="20%">
                        <center>  
                          { transaction.tanggalKembali == ''
                            // ? <a onClick={this.handleDeletetransaction(transaction.id)} className="btn btn-sm btn-link mx-1">Delete</a>
                            ? <a onClick={this.handlePengembalianTransaction(transaction.id)} className="btn btn-sm btn-link      mx-1">Pengembalian</a>
                            : ''
                          }
                        </center>
                      </td>
                    </tr>
                  )}
                  {filtered.length == 0 &&
                    <tr>
                      <td colspan="5"><center><b>Transaction data not available</b></center> </td>
                    </tr>
                  }
                </tbody>
              //show data without filter search
              :
                <tbody>
                  {transactions.items.map((transaction, index) =>
                    <tr key={transaction.id}>
                      <td><center>{transaction.judulBuku}</center></td>
                      <td><center>{transaction.peminjam}</center></td>
                      <td><center>{transaction.tanggalPinjam}</center></td>
                      <td><center>{transaction.estimasiPengembalian}</center></td>
                      <td><center> {transaction.tanggalKembali ? transaction.tanggalKembali : "-"} </center></td>
                      <td width="20%">
                        <center>  
                          { transaction.tanggalKembali == ''
                            // ? <a onClick={this.handleDeletetransaction(transaction.id)} className="btn btn-sm btn-link mx-1">Delete</a>
                            ? <a onClick={this.handlePengembalianTransaction(transaction.id)} className="btn btn-sm btn-link      mx-1">Pengembalian</a>
                            : ''
                          }
                        </center>
                      </td>
                    </tr>
                  )}
                  {transactions.items.length == 0 &&
                    <tr>
                      <td colspan="5"><center><b>Transaction data not available</b></center> </td>
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
  update: transactionActions.update,
  getTransactions: transactionActions.getAll,
  // deleteUser: transactionActions.delete,
};

const connectedTransaksiPage = connect(mapState, actionCreators)(TransaksiPage);
export { connectedTransaksiPage as TransaksiPage };
