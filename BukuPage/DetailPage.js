import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// import { userActions } from '../_actions';
import { bookActions } from '../_actions';


class DetailPage extends React.Component {
  
  componentDidMount() {
    this.props.getBook();
  }

  handleDeleteBook(id) {
    return (e) => this.props.deleteBook(id);
  }

  render() {
    const book = this.props.books.item ? this.props.books.item : '';
    // console.log(this.props);
    //check if the data by id is found 
    // console.log(this.props.books.item)
    // console.log(book.judulBuku);
    return (
      book 
      ?
        <div className="col-md-12">
        <h2>Detail Buku {book.judulBuku}</h2>
          <Link to="/buku" className="btn btn-info">Kembali</Link>
          {/* <Link to="/buku" className="btn btn-info mx-5 float-end">Hapus</Link> */}
          { book.status == 'Tersedia' || book.status == 'tersedia'
            ? <a onClick={this.handleDeleteBook(book.id)} className="btn btn-info mx-5 float-end">Delete</a>
            : ''
          }
          <Link to={`/buku/edit/${book.id}`} className="btn btn-info mx-5 float-end">Edit</Link>
          <div className="mb-4"></div>
        <form name="form" >

            <div className={"row form-group"}>
                <div className="col-2"> 
                  <label>Judul Buku</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.judulBuku}</label> 
                </div>  
            </div>

            <div className={"row form-group"}>
                <div className="col-2"> 
                    <label>Penulis</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.penulisBuku}</label> 
                </div>  
            </div>

            <div className={"row form-group"}>
                <div className="col-2"> 
                    <label>Tahun Terbit</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.tahunTerbit}</label> 
                </div>  
            </div>

            <div className={"row form-group" }>
                <div className="col-2"> 
                    <label>Penerbit</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.penerbit}</label> 
                </div>  
            </div>

            <div className={"row form-group"}>
                <div className="col-2"> 
                    <label>Jenis Buku</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.jenisBuku}</label> 
                </div>  
            </div>

            <div className={"row form-group"}>
                <div className="col-2"> 
                    <label>Tanggal Input Buku</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.tanggalInput}</label> 
                </div>  
            </div>

            <div className={"row form-group"}>
                <div className="col-2"> 
                    <label>Sumber Buku</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.sumberBuku}</label> 
                </div>  
            </div>

            <div className={"row form-group" }>
                <div className="col-2"> 
                    <label>Buku Lama</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.bukuLama}</label> 
                </div>  
            </div>

            <div className={"row form-group"}>
                <div className="col-2"> 
                    <label>Rak Buku</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>{book.rakBuku}</label> 
                </div>  
            </div>

            <div className={"row form-group"}>
                <div className="col-2"> 
                    <label>Status</label> 
                </div>
                <div className="col-1 "> <b>:</b>  </div>
                <div className="col-4">
                  <label>
                  {book.status === 'Tersedia' || book.status ==='tersedia'
                    ? <p className="btn btn-sm btn-success"><b>{book.status}</b></p>
                    : <p className="btn btn-sm btn-danger"><b>Dipinjam</b></p>
                  }
                  </label> 
                </div>  
            </div>

        </form>
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
  // getBooks: bookActions.getAll,
  getBook: bookActions.getById,
  deleteBook: bookActions.delete
};


const connectedDetailPage = connect(mapState, actionCreators)(DetailPage);
export { connectedDetailPage as DetailPage };
