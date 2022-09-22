import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { bookActions } from '../_actions';

class AddPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {              
                judulBuku:'',
                penulisBuku:'',
                tahunTerbit:'',
                penerbit:'',
                jenisBuku:'',
                tanggalInput:'',
                sumberBuku:'',
                bukuLama:'',
                rakBuku:'',
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

    render() {
        const { adding  } = this.props;
        console.log(this.props);
        const { book, submitted } = this.state;
        return (
            <div className="col-md-12">
                <h2>Input Buku</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={"row form-group" + (submitted && !book.judulBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Judul Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="judulBuku" placeholder="Masukkan judul buku" value={book.judulBuku} onChange={this.handleChange} />
                            {submitted && !book.judulBuku &&
                            <div className="help-block">Judul Buku is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.penulisBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Penulis</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="penulisBuku" placeholder="Masukkan Nama Penulis" value={book.penulisBuku} onChange={this.handleChange} />
                            {submitted && !book.penulisBuku &&
                            <div className="help-block">Penulis is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.tahunTerbit ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Tahun Terbit</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="number" className="form-control" name="tahunTerbit" placeholder="Masukkan Tahun Terbit" value={book.tahunTerbit} onChange={this.handleChange} />
                            {submitted && !book.tahunTerbit &&
                            <div className="help-block">Tahun Terbit is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.penerbit ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Penerbit</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="penerbit" placeholder="Masukkan Nama Penerbit" value={book.penerbit} onChange={this.handleChange} />
                            {submitted && !book.penerbit &&
                            <div className="help-block">Penerbit is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.jenisBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Jenis Buku</label> 
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

                    <div className={"row form-group" + (submitted && !book.tanggalInput ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Tanggal Input Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="date" className="form-control" name="tanggalInput" value={book.tanggalInput ? book.tanggalInput : ''} onChange={this.handleChange} />
                            {submitted && !book.tanggalInput &&
                            <div className="help-block">Tanggal Input is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.sumberBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Sumber Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="sumberBuku" placeholder="Masukkan Sumber Buku" value={book.sumberBuku} onChange={this.handleChange} />
                            {submitted && !book.sumberBuku &&
                            <div className="help-block">Sumber Buku is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.bukuLama ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Buku Lama</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="bukuLama" id="inlineRadio1" value="Ya" onChange={this.handleChange}/>
                                <label className="form-check-label" for="inlineRadio1">Ya</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="bukuLama" id="inlineRadio2" value="Tidak" onChange={this.handleChange}/>
                                <label className="form-check-label" for="inlineRadio2">Tidak</label>
                            </div>

                            {submitted && !book.jenisBuku &&
                            <div className="help-block">Buku Lama is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !book.rakBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Rak Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="rakBuku" onChange={this.handleChange}>
                                <option selected>Pilih Rak buku</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>

                            {submitted && !book.rakBuku &&
                            <div className="help-block">Rak buku is required</div>
                            }
                        </div>  
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Simpan</button>
                        <Link to="/buku" className="btn btn-link">Kembali</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { adding } = state.registration;
    return { adding };
}

const actionCreators = {
    add: bookActions.add
}

const connectedAddPage = connect(mapState, actionCreators)(AddPage);
export { connectedAddPage as AddPage };