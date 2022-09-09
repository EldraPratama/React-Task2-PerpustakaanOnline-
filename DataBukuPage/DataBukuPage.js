import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class DataBukuPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-lg">
        <h1>Data Buku</h1>
        <div className="row mb-3">
          <div className="col-md-5">
            <form name="form">
                <div className={'form-group'}>
                    <input type="text" className="form-control" name="search" placeholder="Search"/>
                </div>
            </form>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-2">
              <Link to="/databuku/add" className="btn btn-primary float-end">Input Buku</Link>
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
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>

        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
};

const connectedDataBukuPage = connect(mapState, actionCreators)(DataBukuPage);
export { connectedDataBukuPage as DataBukuPage };
