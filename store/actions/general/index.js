
import cookie from 'react-cookies';

export function errorHandler(dispatch, error, type) {
  console.log("In errorhandler", error);
  let errorMessage = '';
  if (error) {
    errorMessage = error;
  } else {
    errorMessage = error;
  }

  if(error.status === 401 || error.status === 400) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: { error: errorMessage, message: error.message }
    });
  }
}

export function tokenize(data) {
  // console.log(cookie.load('token'));
  var dataObject = data ? data : {};
  dataObject.token = cookie.load('token');
  return dataObject;
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: LOGOUT_USER });
    cookie.remove('token', { path: '/' });
    console.log('logging out...');
    window.location.href = '/auth/login';
  }
}


export function perform_request(url, method, success_action_type, payload_name, params) {
  var protectedData = tokenize(params);
  return new Promise(function(resolve, reject) {
    if (method == 'GET') {
      axios.get(url, params)
      .then(response => {
        var dispatch_object = { type: success_action_type, payload: { message: response.data.message, [payload_name]: response.data[payload_name] || response.data }};
        resolve(dispatch_object);
      })
      .catch(err => {
        reject(err);
      });
    } else if (method == 'POST') {
      axios.post(url, params)
      .then(response => {
        var dispatch_object = { type: success_action_type, payload: { message: response.data.message, [payload_name]: response.data[payload_name] }};
        resolve(dispatch_object);
      })
      .catch(err => {
        reject(err);
      });
    } else if (method == 'PUT') {
      axios.put(url, params)
      .then(response => {
        var dispatch_object = { type: success_action_type, payload: { message: response.data.message, [payload_name]: response.data[payload_name] }};
        resolve(dispatch_object);
      })
      .catch(err => {
        reject(err);
      });
    } else if (method == 'DELETE') {
      axios.delete(url, { data: params })
      .then(response => {
        var dispatch_object = { type: success_action_type, payload: { message: response.data.message, [payload_name]: response.data[payload_name] }};
        resolve(dispatch_object);
      })
      .catch(err => {
        reject(err);
      });
    }
  });
}
