import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';


// import { userActions } from '../_actions';
import { bookActions } from '../_actions';


class DetailsPage extends React.Component {
  componentDidMount() {
    this.props.getBook();
  }

  handleDeleteBook(id) {
    return (e) => this.props.deleteBook(id);
  }

  render() {
    //check if the data by id is found 
    const book = this.props.books.items ? this.props.books.items : '';
    // console.log(book.judulBuku);
    return (
      <div className="col-md-12">
      <h2>Input Buku</h2>
        <Link to="/buku" className="btn btn-info">Kembali</Link>
        <Link to="/buku" className="btn btn-info mx-5 float-end">Hapus</Link>
        <Link to="/buku" className="btn btn-info mx-5 float-end">Edit</Link>
        <div className="mb-4"></div>
      <form name="form" >

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                <label>Judul Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                <label>{book.judulBuku}</label> 
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Penulis</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                <label>{book.penulisBuku}</label> 
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Tahun Terbit</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                <label>{book.tahunTerbit}</label> 
              </div>  
          </div>

          <div className={"row form-group" }>
              <div className="col-md-2"> 
                  <label>Penerbit</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                <label>{book.penerbit}</label> 
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Jenis Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                <label>{book.jenisBuku}</label> 
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Tanggal Input Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                <label>{book.tanggalInput}</label> 
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Sumber Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                <label>{book.sumberBuku}</label> 
              </div>  
          </div>

          <div className={"row form-group" }>
              <div className="col-md-2"> 
                  <label>Buku Lama</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                 
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Rak Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
             
              </div>  
          </div>

      </form>
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
  // getBooks: bookActions.getAll,
  getBook: bookActions.getById,
  deleteBook: bookActions.delete
};


const connectedDetailsPage = connect(mapState, actionCreators)(DetailsPage);
export { connectedDetailsPage as DetailsPage };
