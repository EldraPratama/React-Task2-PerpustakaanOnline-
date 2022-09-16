import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { userActions } from '../_actions';
import { bookActions } from '../_actions';

class BukuPage extends React.Component {
  componentDidMount() {
    this.props.getBooks();
    
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users, books } = this.props;
    return (
      <div className="col-lg">
        <h1>Data Buku</h1>
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
              <Link to="/buku/add" className="btn btn-primary float-end">Input Buku</Link>
          </div>
        </div>
        <table class="table table-bordered ">
          <thead class="table-primary">
            <tr>
              <th scope="col">Judul Buku</th>
              <th scope="col">Penulis</th>
              <th scope="col">Jenis Buku</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-bordered ">
          <thead class="table-primary">
            {/* <tr>
              <th scope="col">Judul Buku</th>
              <th scope="col">Penulis</th>
              <th scope="col">Jenis Buku</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr> */}
                {/* {books.items &&
                    <ul>
                        {books.items.map((book, index) =>
                            <li key={book.id}>
                                {book.judulBuku + ' ' + book.penulisBuku + ' ' + book.tahunTerbit + ' ' + book.penerbit + ' ' + book.jenisBuku
                                + ' ' + book.tanggalInput + ' ' + book.sumberBuku+ ' ' + book.bukuLama+ ' ' + book.rakBuku}
                                {
                                    book.deleting ? <em> - Deleting...</em>
                                    : book.deleteError ? <span className="text-danger"> - ERROR: {book.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteBook(book.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                } */}
          </thead>
        </table>

        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapState(state) {
  const { books } = state;
  return {  books };
}

const actionCreators = {
  // getUsers: userActions.getAll,
  // deleteUser: userActions.delete,
  getBooks: bookActions.getAll
};

const connectedBukuPage = connect(mapState, actionCreators)(BukuPage);
export { connectedBukuPage as BukuPage };
