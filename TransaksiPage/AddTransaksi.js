import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { bookActions } from '../_actions';

class AddTransaksi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {              
                judulBuku:'',
                penulisBuku:'',
                rakBuku:'',
                peminjam:'',
                tahunTerbit:'',
                penerbit:'',
                jenisBuku:'',
                tanggalInput:'',
                sumberBuku:'',
                bukuLama:'',
                status:'Tersedia'
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

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { book } = this.state;
      
        // validate all input not empty 
        if (book.judulBuku !== '' && book.penulisBuku !== '' && book.tahunTerbit !== '' && book.penerbit !== '' && book.jenisBuku !== '' && book.tanggalInput !== '' && book.sumberBuku !== '' && book.bukuLama !== '' && book.rakBuku !== ''  ) {
            this.props.add(book);
        } 
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        const { adding , books } = this.props;
        console.log(books);
        console.log(this.props);
        const { book, submitted } = this.state;
        return (
            <div className="col-md-12">
                <h2 className="mb-6">Peminjaman Buku</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={"row form-group" + (submitted && !book.judulBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Judul Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="jenisBuku" onChange={this.handleChange}>
                                <option selected>Pilih Jenis buku</option>

                                <option value="Novel">Novel</option>
                                <option value="Sejarah">Sejarah</option>
                                <option value="Ensiklopedia">Ensiklopedia</option>
                            </select>

                            {submitted && !book.jenisBuku &&
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
                            <label> Select judul buku to get Penulis </label>
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.rakBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Rak Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <label> Select judul buku to get Rak buku </label>
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

                    <div className={"row form-group" + (submitted && !book.umur ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Umur Peminjam</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="number" className="form-control" name="umur" placeholder="Masukkan Tahun Terbit" value={book.umur} onChange={this.handleChange} min={8} max={70}/>
                            {submitted && !book.umur &&
                            <div className="help-block">Umur peminjam is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.tanggalInput ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Tanggal Pinjam Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="date" className="form-control" name="tanggalInput"  value={book.tanggalInput ? book.tanggalInput : ''} onChange={this.handleChange} max={new Date().toISOString().slice(0, -14)} />
                            {submitted && !book.tanggalInput &&
                            <div className="help-block">Tanggal Pinjam is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.tanggalInput ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Estimasi Pengembalian </label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="date" className="form-control" name="tanggalInput"  value={book.tanggalInput ? book.tanggalInput : ''} onChange={this.handleChange} min={new Date( new Date().getTime() + 86400000 ).toISOString().slice(0, -14)} />
                            {submitted && !book.tanggalInput &&
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
        );
    }
}

function mapState(state) {
    // console.log(state);
    const { adding } = state.registration;
    return { adding };
}

const actionCreators = {
    getBooks: bookActions.getAll,
    add: bookActions.add
}

const connectedAddTransaksi = connect(mapState, actionCreators)(AddTransaksi);
export { connectedAddTransaksi as AddTransaksi };