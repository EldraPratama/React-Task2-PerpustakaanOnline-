import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { alertActions, transactionActions } from '../_actions';

class TransaksiPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search:'',
      pengembalian: false,
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      search: value
    });
    //reset alert
    this.props.clearAlerts();
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  //when pengembalian onclick  
  handlePengembalian(id) {
    this.setState({ pengembalian: true });
    this.props.update(id);
     
  }

  render() {
    const { user, users, transactions } = this.props;

    //filter data transaction
    let filtered ;
    let valueSearch = this.state.search.toLowerCase();
    if(transactions.items){
      filtered = transactions.items.filter(transaction => transaction.judulBuku.toLowerCase().includes(valueSearch)
      || transaction.peminjam.toLowerCase().includes(valueSearch)
      || transaction.tanggalPinjam.toLowerCase().includes(valueSearch));
    }

    //show data with or without filter
    const data = () => {
      if(this.state.search !=''){
        return filtered;
      }else{  
        return transactions.items;
      }
    }

    //refresh data transaction and change state pengembalian when click pengembalian
    if(this.state.pengembalian == true){
      this.setState({ pengembalian: false });
      this.props.getTransactions();
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
                <th scope="col">Judul Buku </th>
                <th scope="col">Nama Peminjam </th>
                <th scope="col">Tanggal Pinjam </th>
                <th scope="col">Estimasi Pengembalian </th>
                <th scope="col">Tanggal Kembali </th>
                <th scope="col"> Actions </th>
              </tr>
            </thead>

            {/* show data with or without filter  */}
            {transactions.items && 
              <tbody>
                {data().map((transaction, index) =>
                  <tr key={transaction.id}>
                    <td>{transaction.judulBuku}</td>
                    <td width="20%">{transaction.peminjam}</td>
                    <td width="12%">{transaction.tanggalPinjam}</td>
                    <td width="12%">{transaction.estimasiPengembalian}</td>
                    <td width="12%"> {transaction.tanggalKembali ? transaction.tanggalKembali : "-"} </td>
                    <td width="12%">  
                        { transaction.tanggalKembali == ''
                          ? <a onClick={()=>this.handlePengembalian(transaction.id)} className="btn btn-sm btn-link      mx-1">Pengembalian</a>
                          : ''
                        }                     
                    </td>
                  </tr>
                )}
                {data().length == 0 &&
                  <tr>
                    <td colspan="5"><b>Transaction data not found</b> </td>
                  </tr>
                }
              </tbody>
            }
          </table>

        </div>
      :
        //show spinner 
        <div class="m-5">
          <div class="text-center">
            <div class="spinner-grow text-primary mx-4" role="status"></div>
            <div class="spinner-grow text-success mx-4" role="status"></div>
            <div class="spinner-grow text-danger mx-4" role="status"></div>
            <div class="spinner-grow text-warning mx-4" role="status"></div>
          </div>
        </div>
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
  clearAlerts: alertActions.clear,
};

const connectedTransaksiPage = connect(mapState, actionCreators)(TransaksiPage);
export { connectedTransaksiPage as TransaksiPage };
