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
    const { name, value } = event.target;
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

    //filter data based judul buku
    if(books.items){
      let valueSearch = this.state.search.toLowerCase();
      books.items = books.items.filter(book => book.judulBuku.toLowerCase().includes(valueSearch));
      //reset list book
      
      if(books.items.length == 0 && valueSearch ==''){
        this.props.getBooks();
      }
     


    }

    // const filtered = books.filter(book => book.items.judulBuku.toLowerCase().includes('Bu'));
    // console.log(filtered);
    // console.log(this.state.search);
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
                          <td><center>
                              {book.status === 'Tersedia' || book.status ==='tersedia'
                                ? <p className="btn btn-sm btn-success">{book.status}</p>
                                : <p className="btn btn-sm btn-danger">Dipinjam</p>
                              }</center>
                          </td>
                          <td width="25%">
                            <center>  
                              {/* <a onClick={this.handleDeleteBook(book.id)} className="btn btn-sm btn-link mx-1">Detail</a> */}
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
  searchBooks: bookActions.getBySearch,
  deleteBook: bookActions.delete
};


const connectedBukuPage = connect(mapState, actionCreators)(BukuPage);
export { connectedBukuPage as BukuPage };
