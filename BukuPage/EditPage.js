import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { bookActions } from '../_actions';

class EditPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          book: {              
              judulBuku: '',
              penulisBuku: '',
              tahunTerbit: '',
              penerbit:'',
              jenisBuku:'',
              tanggalInput:'',
              sumberBuku:'',
              bukuLama:'',
              rakBuku:'',
              status:''
          },
          submitted: false
        }; 
 
        //get data by id for edit book's value 
        this.props.getBook();


       

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
      this.props.getBook();
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

        // this.setState({ submitted: true });
        
        // console.log(this.state==null);
        // const { book } = this.state;
        // if (book.judulBuku !== null && book.tahunTerbit && book.penulisBuku && book.penerbit) {
        //     this.props.add(book);
        // }
        // validate all input not empty 
        // if (book.judulBuku !== '' && book.penulisBuku !== '' && book.tahunTerbit !== '' && book.penerbit !== '' && book.jenisBuku !== '' && book.tanggalInput !== '' && book.sumberBuku !== '' && book.bukuLama !== '' && book.rakBuku !== ''  ) {
        //     this.props.add(book);
        // } 
    }

    render() {
        //variabel to get book data based on id
        const book = this.props.books.item ? this.props.books.item : '';
        //variabel to get state data 
        const state = this.state.book ;
        console.log(this.state);
        console.log(this.props);
        
        if(book){
            console.log(book);
            if(state.judulBuku ==''){
                this.setState({
                    book: {
                        judulBuku : book.judulBuku,
                        penulisBuku : book.penulisBuku,
                        tahunTerbit : book.tahunTerbit,
                        penerbit : book.penerbit,
                        jenisBuku : book.jenisBuku,
                        tanggalInput : book.tanggalInput,
                        sumberBuku : book.sumberBuku,
                        bukuLama : book.bukuLama,
                        rakBuku : book.rakBuku,
                        status : book.status,
                    }
                });
            }
        }

        // console.log(this.state);
        // if(this.state){
        //     console.log(this.state);
        //     const { book,submitted } = this.state;
        // }
        // let getBook = this.props.books.item ? this.props.books.item : '';

        // if(getBook != ''){
        //   console.log(getBook);
        //   console.log(getBook.judulBuku);
        //   // this.handleValueEdit(getBook);
        //   // this.setState({
        //   //   book: {
        //   //     ...book,
        //   //     judulBuku : getBook.judulBuku,
        //   //   }
        //   // });
        // }

        return (
            <div className="col-md-12">
                <h2>Edit Buku</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.judulBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Judul Buku</label> 
                        </div> 
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="judulBuku" placeholder="Masukkan judul buku" value={state.judulBuku} onChange={this.handleChange} />
                            {/* { !book.judulBuku &&
                            <div className="help-block">Judul Buku is required</div>
                            } */}
                        </div>  
                    </div>
 
                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.penulisBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Penulis</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="penulisBuku" placeholder="Masukkan Nama Penulis" value={state.penulisBuku} onChange={this.handleChange} />
                            {/* { !book.penulisBuku &&
                            <div className="help-block">Penulis is required</div>
                            } */}
                        </div>  
                    </div>

                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.tahunTerbit ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Tahun Terbit</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="number" className="form-control" name="tahunTerbit" placeholder="Masukkan Tahun Terbit" value={state.tahunTerbit} onChange={this.handleChange} />
                            {/* { !book.tahunTerbit &&
                            <div className="help-block">Tahun Terbit is required</div>
                            } */}
                        </div>  
                    </div>

                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.penerbit ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Penerbit</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="penerbit" placeholder="Masukkan Nama Penerbit" value={state.penerbit} onChange={this.handleChange} />
                            {/* { !book.penerbit &&
                            <div className="help-block">Penerbit is required</div>
                            } */}
                        </div>  
                    </div>

                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.jenisBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Jenis Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="jenisBuku" value={state.jenisBuku} onChange={this.handleChange}>
                                
                                <option selected>Pilih jenis buku</option>
                                <option value="Novel">Novel</option>
                                <option value="Sejarah">Sejarah</option>
                                <option value="Ensiklopedia">Ensiklopedia</option>
                            </select>

                            {/* { !book.jenisBuku &&
                            <div className="help-block">Jenis buku is required</div>
                            } */}
                        </div>  
                    </div>
 
                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.tanggalInput ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Tanggal Input Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="date" className="form-control" name="tanggalInput" value={state.tanggalInput} onChange={this.handleChange} />
                            {/* { !book.tanggalInput &&
                            <div className="help-block">Tanggal Input is required</div>
                            } */}
                        </div>  
                    </div>

                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.sumberBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Sumber Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" name="sumberBuku" placeholder="Masukkan Sumber Buku" value={state.sumberBuku} onChange={this.handleChange} />
                            {/* { !book.sumberBuku &&
                            <div className="help-block">Sumber Buku is required</div>
                            } */}
                        </div>  
                    </div>

                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.bukuLama ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Buku Lama</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            {/* <input type="select" className="form-control" name="jenisBuku" placeholder="Pilih Jenis Buku" value={book.jenisBuku} onChange={this.handleChange} /> */}
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bukuLama" id="inlineRadio1" value="Ya" onChange={this.handleChange} checked={ state.bukuLama =='Ya'}/>
                                <label class="form-check-label" for="inlineRadio1">Ya</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="bukuLama" id="inlineRadio2" value="Tidak" onChange={this.handleChange} checked={ state.bukuLama =='Tidak'}/>
                                <label class="form-check-label" for="inlineRadio2">Tidak</label>
                            </div>

                            {/* { !book.jenisBuku &&
                            <div className="help-block">Buku Lama is required</div>
                            } */}
                        </div>  
                    </div>

                    <div className={"row form-group" + ( typeof book == 'undefined' ? '' : !book.rakBuku ? ' has-error' : '')}>
                        <div className="col-md-2"> 
                            <label>Rak Buku</label> 
                        </div>
                        <div className="col-md-1 "> <b>:</b>  </div>
                        <div className="col-md-4">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="rakBuku" value={state.rakBuku} onChange={this.handleChange}>
                                <option selected>Pilih Rak buku</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>

                            {/* { !book.rakBuku &&
                            <div className="help-block">Rak buku is required</div>
                            } */}
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
    const { books } = state;
    return { books };
}

const actionCreators = {
    add: bookActions.add,
    getBook: bookActions.getById,

}

const connectedEditPage = connect(mapState, actionCreators)(EditPage);
export { connectedEditPage as EditPage };