import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { userActions } from '../_actions';
import { bookActions } from '../_actions';


class BukuPage extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  handleDeleteBook(id) {
    return (e) => this.props.deleteBook(id);
  }

  render() {
    // console.log(toLowerCase('EL'))
    const { books } = this.props;
    return (
      <div className="col-lg">
        <h1>Data Buku</h1>
        <div className="row mb-3">
          <div className="col-md-5">
            <form name="form">
              <div className={'form-group'}>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <Link to="/buku/add" className="btn btn-primary float-end">
              Input Buku
            </Link>
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
            {books.items &&
              <tbody>
                  {books.items.map((book, index) =>
                  
                      <tr key={book.id}>
                          <td>{book.judulBuku}</td>
                          <td>{book.penulisBuku}</td>
                          <td>{book.jenisBuku}</td>
                          <td>{book.status == 'Tersedia' || book.status =='tersedia'
                                ? <p className="btn btn-sm btn-success">{book.status}</p>
                                : <p className="btn btn-sm btn-danger">{book.status}</p>
                              }
                          </td>
                          <td width="25%">
                            <center>  
                              <a onClick={this.handleDeleteBook(book.id)} className="btn btn-sm btn-link mx-1">Detail</a>
                              <a onClick={this.handleDeleteBook(book.id)} className="btn btn-sm btn-link mx-1">Edit</a>
                              { book.status == 'Tersedia' || book.status == 'tersedia'
                                ? <a onClick={this.handleDeleteBook(book.id)} className="btn btn-sm btn-link mx-1">Delete</a>
                                : ''
                              }

                            </center>
                          </td>
                          {
                              // book.deleting ? <em> - Deleting...</em>
                              // : book.deleteError ? <span className="text-danger"> - ERROR: {book.deleteError}</span>
                          }
                      </tr>
                  )}
              </tbody>
            }
          
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
  return { books };
}


const actionCreators = {
  // getUsers: userActions.getAll,
  getBooks: bookActions.getAll,
  deleteBook: bookActions.delete
};


const connectedBukuPage = connect(mapState, actionCreators)(BukuPage);
export { connectedBukuPage as BukuPage };
