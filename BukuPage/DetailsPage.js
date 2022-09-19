import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';


// import { userActions } from '../_actions';
import { bookActions } from '../_actions';


class DetailsPage extends React.Component {
  componentDidMount() {
    // console.log(id);
    this.props.getBooks();
    this.props.getBook();
  }

  handleDeleteBook(id) {
    return (e) => this.props.deleteBook(id);
  }

  render() {
    const { books } = this.props;
    // console.log(this.props);
    return (
      <div className="col-md-12">
      <h2>Input Buku</h2>
      <form name="form" >

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Judul Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Penulis</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                 
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Tahun Terbit</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
           
              </div>  
          </div>

          <div className={"row form-group" }>
              <div className="col-md-2"> 
                  <label>Penerbit</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
              
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Jenis Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
               
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Tanggal Input Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
               
              </div>  
          </div>

          <div className={"row form-group"}>
              <div className="col-md-2"> 
                  <label>Sumber Buku</label> 
              </div>
              <div className="col-md-1 "> <b>:</b>  </div>
              <div className="col-md-4">
                
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
  // console.log(state);
  const { books } = state;
  return { books };
}


const actionCreators = {
  // getUsers: userActions.getAll,
  getBooks: bookActions.getAll,
  getBook: bookActions.getById,
  deleteBook: bookActions.delete
};


const connectedDetailsPage = connect(mapState, actionCreators)(DetailsPage);
export { connectedDetailsPage as DetailsPage };
