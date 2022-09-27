import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// import { userActions } from '../_actions';
import { bookActions } from '../_actions';


class BukuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        search:'',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      search: value
    });
  }

  componentDidMount() {
    this.props.getBooks();
  }

  handleDeleteBook(id) {
    return (e) => this.props.deleteBook(id);
  }



  render() {
    let { books } = this.props;
    // console.log(this.props);
  
    //filter data based judul buku
    let filtered ;
    let valueSearch = this.state.search.toLowerCase() ;
    if(books.items){
      filtered = books.items.filter(book => book.judulBuku.toLowerCase().includes( valueSearch ) 
        || book.penulisBuku.toLowerCase().includes( valueSearch )
        || book.jenisBuku.toLowerCase().includes( valueSearch )
      );
    }

    return (
      books.items 
      ?
        <div className="col-lg">
          <h1>Data Buku </h1>
          <div className="row mb-3">
            <div className="col-md-5">
              <form name="form">
                <div className={'form-group'}>
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    placeholder="Search"
                    onChange={this.handleChange}
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
                <th scope="col"><center> Judul Buku </center></th>
                <th scope="col"><center> Penulis </center></th>
                <th scope="col"><center> Jenis Buku </center></th>
                <th scope="col"><center> Status </center></th>
                <th scope="col"><center> Actions </center></th>
              </tr>
            </thead>

              {/* show data */}
              {books.items &&
                valueSearch !='' 
                ?
                //show data with filter search
                  <tbody>
                    {filtered.map((book, index) =>
                        <tr key={book.id}>
                          <td width="40%">{book.judulBuku}</td>
                          <td>{book.penulisBuku}</td>
                          <td>{book.jenisBuku}</td>
                          <td width="10%"><center>
                              {book.status === 'Tersedia' || book.status ==='tersedia'
                                ? <p className="btn btn-sm btn-success">{book.status}</p>
                                : <p className="btn btn-sm btn-danger">Dipinjam</p>
                              }</center>
                          </td>
                          <td width="20%">
                            <center>  
                              <Link to={`/buku/detail/${book.id}`}  className="btn btn-sm btn-link mx-1">
                                  Detail
                              </Link>
                              <Link to={`/buku/edit/${book.id}`}  className="btn btn-sm btn-link mx-1">
                                  Edit
                              </Link>
                              { book.status == 'Tersedia' || book.status == 'tersedia'
                                ? <a onClick={this.handleDeleteBook(book.id)} className="btn btn-sm btn-link mx-1">Delete</a>
                                : ''
                              }
                            </center>
                          </td>
                        </tr>
                    )}
                    {filtered.length == 0 &&
                      <tr>
                        <td colspan="5"><center><b>Book data not found</b></center> </td>
                      </tr>
                    }
                  </tbody>
                :
                //show data without filter search
                  <tbody>
                    {books.items.map((book, index) =>
                        <tr key={book.id}>
                            <td width="40%">{book.judulBuku}</td>
                            <td>{book.penulisBuku}</td>
                            <td>{book.jenisBuku}</td>
                            <td width="10%"><center>
                                {book.status === 'Tersedia' || book.status ==='tersedia'
                                  ? <p className="btn btn-sm btn-success">{book.status}</p>
                                  : <p className="btn btn-sm btn-danger">Dipinjam</p>
                                }</center>
                            </td>
                            <td width="20%">
                              <center>  
                                <Link to={`/buku/detail/${book.id}`}  className="btn btn-sm btn-link mx-1">
                                    Detail
                                </Link>
                                <Link to={`/buku/edit/${book.id}`}  className="btn btn-sm btn-link mx-1">
                                    Edit
                                </Link>
                                { book.status == 'Tersedia' || book.status == 'tersedia'
                                  ? <a onClick={this.handleDeleteBook(book.id)} className="btn btn-sm btn-link mx-1">Delete</a>
                                  : ''
                                }
                              </center>
                            </td>
                        </tr>
                    )}
                    {books.items.length == 0 &&
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
  const { books } = state;
  return { books };
}


const actionCreators = {
  // getUsers: userActions.getAll,
  getBooks: bookActions.getAll,
  // searchBooks: bookActions.getBySearch,
  deleteBook: bookActions.delete
};


const connectedBukuPage = connect(mapState, actionCreators)(BukuPage);
export { connectedBukuPage as BukuPage };
