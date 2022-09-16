import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { bookActions } from '../_actions';

class AddPage extends React.Component {
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
        const { adding  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-12">
                <h2>Input Buku</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={"row form-group" + (submitted && !user.judulBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
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
                        <div className="col-md-2"> 
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
                        <div className="col-md-2"> 
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
                        <div className="col-md-2"> 
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
                        <div className="col-md-2"> 
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
                        <div className="col-md-2"> 
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
                        <div className="col-md-2"> 
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
                        <div className="col-md-2"> 
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
                        <div className="col-md-2"> 
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

                    <div className="form-group">
                        <button className="btn btn-primary">Simpan</button>
                        {/* {adding && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        } */}
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