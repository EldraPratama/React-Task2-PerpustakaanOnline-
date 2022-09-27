import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { bookActions } from '../_actions';
import { transactionActions } from '../_actions';

class AddTransaksi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {              
                judulBuku:'',
                penulisBuku:'',
                rakBuku:'',
                peminjam:'',
                umurPeminjam:'',
                tanggalPinjam:'',
                tanggalKembali:'',
                estimasiPengembalian:'',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const { name, value } = event.target;
        const { book } = this.state;
        this.setState({
            book: {
                ...book,
                [name]: value
            }
        });
    }

    componentDidMount() {
        this.props.getBooks();
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { book } = this.state;
        // console.log(book);
      
        // validate all input not empty 
        if (book.judulBuku !== '' && book.peminjam !== '' && book.umurPeminjam !== '' && book.tanggalPinjam !== ''  && book.estimasiPengembalian !== '' ) {
            this.props.add(book);
        } 
    }

    render() {
        const { adding , books } = this.props;
        const { book, submitted } = this.state;
        console.log(books);
        console.log(book);
        
        let selected ;
        let judulBuku = this.state.book.judulBuku ;
        
        if(books.items && judulBuku !=''){
          selected = books.items.filter(book => book.judulBuku.includes( judulBuku ));
        //   console.log(selected);
        //   console.log(selected[0].penulisBuku);
        //   this.setState({ 
        //     book: {              
        //         judulBuku:'',
        //         penulisBuku: selected.penulisBuku,
        //         rakBuku:'',
        //         peminjam:'',
        //         umurPeminjam:'',
        //         tanggalPinjam:'',
        //         estimasiPengembalian:'',
        //     },
        //     submitted: true
        //   });

        }
        return (
            
            books.items
            ?
                <div className="col-md-12">
                    <h2 className="mb-6">Peminjaman Buku</h2>
                    <form name="form" onSubmit={this.handleSubmit}>

                        <div className={"row form-group" + (submitted && !book.judulBuku ? ' has-error' : '')}>
                            <div className="col-md-2"> 
                                <label>Judul Buku</label> 
                            </div>
                            <div className="col-md-1 "> <b>:</b>  </div>
                            <div className="col-md-4">
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="judulBuku" onChange={this.handleChange}>
                                    
                                    {/* show judul buku where status "Tersedia" */}
                                    <option value="" selected>Pilih Jenis buku</option>
                                    {books.items.map((book, index) => 
                                        book.status =="Tersedia"
                                        ? <option value={book.judulBuku}>{book.judulBuku}</option>
                                        : ""
                                    )}

                                </select>

                                {submitted && !book.judulBuku &&
                                <div className="help-block">Jenis buku is required</div>
                                }
                            </div>  
                        </div>

                        <div className={"row form-group" + (submitted && !book.penulisBuku ? ' has-error' : '')}>
                            <div className="col-md-2"> 
                                <label>Penulis</label> 
                            </div>
                            <div className="col-md-1 "> <b>:</b>  </div>
                            <div className="col-md-4">
                                <label> {selected ? selected[0].penulisBuku : "-" } </label>
                            </div>  
                        </div>

                        <div className={"row form-group" + (submitted && !book.rakBuku ? ' has-error' : '')}>
                            <div className="col-md-2"> 
                                <label>Rak Buku</label> 
                            </div>
                            <div className="col-md-1 "> <b>:</b>  </div>
                            <div className="col-md-4">
                                <label> {selected ? selected[0].rakBuku : "-" } </label>
                            </div>  
                        </div>



                        <div className={"row form-group" + (submitted && !book.peminjam ? ' has-error' : '')}>
                            <div className="col-md-2"> 
                                <label>Peminjam</label> 
                            </div>
                            <div className="col-md-1 "> <b>:</b>  </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" name="peminjam" placeholder="Masukkan Nama peminjam" value={book.peminjam} onChange={this.handleChange} />
                                {submitted && !book.peminjam &&
                                <div className="help-block">Peminjam is required</div>
                                }
                            </div>  
                        </div>

                        <div className={"row form-group" + (submitted && !book.umurPeminjam ? ' has-error' : '')}>
                            <div className="col-md-2"> 
                                <label>Umur Peminjam</label> 
                            </div>
                            <div className="col-md-1 "> <b>:</b>  </div>
                            <div className="col-md-4">
                                <input type="number" className="form-control" name="umurPeminjam" placeholder="Masukkan umur peminjam" value={book.umurPeminjam} onChange={this.handleChange} min={8} max={70}/>
                                {submitted && !book.umurPeminjam &&
                                <div className="help-block">Umur peminjam is required</div>
                                }
                            </div>  
                        </div>

                        <div className={"row form-group" + (submitted && !book.tanggalPinjam ? ' has-error' : '')}>
                            <div className="col-md-2"> 
                                <label>Tanggal Pinjam Buku</label> 
                            </div>
                            <div className="col-md-1 "> <b>:</b>  </div>
                            <div className="col-md-4">
                                <input type="date" className="form-control" name="tanggalPinjam"  value={book.tanggalPinjam ? book.tanggalPinjam : '' } onChange={this.handleChange} max={new Date().toISOString().slice(0, -14)} />
                                {submitted && !book.tanggalPinjam &&
                                <div className="help-block">Tanggal Pinjam is required</div>
                                }
                            </div>  
                        </div>

                        <div className={"row form-group" + (submitted && !book.estimasiPengembalian ? ' has-error' : '')}>
                            <div className="col-md-2"> 
                                <label>Estimasi Pengembalian </label> 
                            </div>
                            <div className="col-md-1 "> <b>:</b>  </div>
                            <div className="col-md-4">
                                <input type="date" className="form-control" name="estimasiPengembalian"  value={book.estimasiPengembalian ? book.estimasiPengembalian : '' } onChange={this.handleChange} min={new Date( new Date().getTime() + 86400000 ).toISOString().slice(0, -14)} />
                                {submitted && !book.estimasiPengembalian &&
                                <div className="help-block">Estimasi Pengembalian is required</div>
                                }
                            </div>  
                        </div>



                        <div className="form-group">
                            <button className="btn btn-primary">Simpan</button>
                            <Link to="/transaksi" className="btn btn-primary mx-3">Kembali</Link>
                        </div>
                    </form>
                </div>
            :
                <div></div>
        );
    }
}

function mapState(state) {
    const { adding } = state.registration;
    const {books} = state;
    return { adding, books };
}

const actionCreators = {
    getBooks: bookActions.getAll,
    add: transactionActions.add
}

const connectedAddTransaksi = connect(mapState, actionCreators)(AddTransaksi);
export { connectedAddTransaksi as AddTransaksi };