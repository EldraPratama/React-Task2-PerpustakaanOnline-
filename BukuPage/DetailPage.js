import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { bookActions } from '../_actions';


class DetailPage extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          user: {              
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
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        console.log(user)
        // if (user.judulBuku !== null && user.tahunTerbit && user.penulisBuku && user.penerbit) {
        //     this.props.add(user);
        // }
        // validate all input not empty 
        if (user.judulBuku !== '' && user.penulisBuku !== '' && user.tahunTerbit !== '' && user.penerbit !== '' && user.jenisBuku !== '' && user.tanggalInput !== '' && user.sumberBuku !== '' && user.bukuLama !== '' && user.rakBuku !== ''  ) {
            this.props.add(user);
        } 
    }

    render() {
        const { book  } = this.props;
        const { user, submitted } = this.state;
        
        return (
            <div className="col-md-12">
                <h2>Detail Buku</h2>
                <Link to="/buku" className="btn btn-info">Kembali</Link>
                <Link to="/buku" className="btn btn-info mx-5 float-end">Hapus</Link>
                <Link to="/buku" className="btn btn-info mx-5 float-end">Edit</Link>
                <div className="mb-4"></div>

                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={"row form-group" + (submitted && !user.judulBuku ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Judul Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="judulBuku" placeholder="Masukkan judul buku" value={user.judulBuku} onChange={this.handleChange} />
                            {submitted && !user.judulBuku &&
                            <div className="help-block">Judul Buku is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !user.penulisBuku ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Penulis</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="penulisBuku" placeholder="Masukkan Nama Penulis" value={user.penulisBuku} onChange={this.handleChange} />
                            {submitted && !user.penulisBuku &&
                            <div className="help-block">Penulis is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !user.tahunTerbit ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Tahun Terbit</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="number" className="form-control" name="tahunTerbit" placeholder="Masukkan Tahun Terbit" value={user.tahunTerbit} onChange={this.handleChange} />
                            {submitted && !user.tahunTerbit &&
                            <div className="help-block">Tahun Terbit is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !user.penerbit ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Penerbit</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="penerbit" placeholder="Masukkan Nama Penerbit" value={user.penerbit} onChange={this.handleChange} />
                            {submitted && !user.penerbit &&
                            <div className="help-block">Penerbit is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !user.jenisBuku ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Jenis Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            {/* <input type="select" className="form-control" name="jenisBuku" placeholder="Pilih Jenis Buku" value={user.jenisBuku} onChange={this.handleChange} /> */}
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="jenisBuku" onChange={this.handleChange}>
                                <option selected>Pilih Jenis buku</option>
                                <option value="Novel">Novel</option>
                                <option value="Sejarah">Sejarah</option>
                                <option value="Ensiklopedia">Ensiklopedia</option>
                            </select>

                            {submitted && !user.jenisBuku &&
                            <div className="help-block">Jenis buku is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !user.tanggalInput ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Tanggal Input Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="date" className="form-control" name="tanggalInput" value={user.tanggalInput ? user.tanggalInput : ''} onChange={this.handleChange} />
                            {submitted && !user.tanggalInput &&
                            <div className="help-block">Tanggal Input is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !user.sumberBuku ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Sumber Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="sumberBuku" placeholder="Masukkan Sumber Buku" value={user.sumberBuku} onChange={this.handleChange} />
                            {submitted && !user.sumberBuku &&
                            <div className="help-block">Sumber Buku is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !user.bukuLama ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Buku Lama</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            {/* <input type="select" className="form-control" name="jenisBuku" placeholder="Pilih Jenis Buku" value={user.jenisBuku} onChange={this.handleChange} /> */}
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bukuLama" id="inlineRadio1" value="Ya" onChange={this.handleChange}/>
                                <label class="form-check-label" for="inlineRadio1">Ya</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bukuLama" id="inlineRadio2" value="Tidak" onChange={this.handleChange}/>
                                <label class="form-check-label" for="inlineRadio2">Tidak</label>
                            </div>
                            <p>{user.bukuLama}</p>

                            {submitted && !user.jenisBuku &&
                            <div className="help-block">Buku Lama is required</div>
                            }
                        </div>  
                    </div>

                    <div className={"row form-group" + (submitted && !user.rakBuku ? ' has-error' : '')}>
                        <div className="col-md-3"> 
                            <label>Rak Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="rakBuku" onChange={this.handleChange}>
                                <option selected>Pilih Rak buku</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>

                            {submitted && !user.rakBuku &&
                            <div className="help-block">Rak buku is required</div>
                            }
                        </div>  
                    </div>

              
                </form>
            </div>
        );
    }
}

function mapState(state) {
    // console.log(state);
    const { book } = state.books;
    return { book };
}

const actionCreators = {
    add: bookActions.add,
    detail:bookActions.getById
}

// console.log(actionCreators.detail);

const connectedDetailPage = connect(mapState, actionCreators)(DetailPage);
export { connectedDetailPage as DetailPage };