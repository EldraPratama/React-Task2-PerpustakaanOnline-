import { bookConstants } from '../_constants';
import { bookService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const bookActions = {
    add,
    getAll,
    delete: _delete
};


function add(book) {
    return dispatch => {
        dispatch(request(book));

        bookService.add(book)
            .then(
                book => { 
                    dispatch(success());
                    history.push('/buku');
                    dispatch(alertActions.success('Add book successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(book) { return { type: bookConstants.ADD_REQUEST, book } }
    function success(book) { return { type: bookConstants.ADD_SUCCESS, book } }
    function failure(error) { return { type: bookConstants.ADD_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        bookService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: bookConstants.GETALL_REQUEST } }
    function success(users) { return { type: bookConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: bookConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        bookService.delete(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: bookConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: bookConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: bookConstants.DELETE_FAILURE, id, error } }
}