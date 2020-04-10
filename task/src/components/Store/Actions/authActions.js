import axios from '../../../axios-instance';

// export const USER_LOGIN = 'USER_LOGIN';
// export const USER_LOGOUT = 'USER_LOGOUT';
// export const LOGIN_ERROR = 'LOGIN_ERROR';

// export const login = (credentials) => {
//     return dispatch => {
//         axios
//             .post('/users.json', {
//                 email: credentials.email,
//                 password: credentials.password
//             })
//             .then(response => {
//                 dispatch({
//                     type: USER_LOGIN,
//                     email: response.email,
//                     password: response.password
//                 })
//                 this.props.history.push("/dashboard");
//             })
//             .catch(error => {
//                 dispatch({
//                         type: LOGIN_ERROR,
//                         error
//                     })
//                     // console.log("No match found");

//             })
//     }
// }


export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const setLoginPending = (isLoginPending) => {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

const setLoginSuccess = (isLoginSuccess) => {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

const setLoginError = (loginError) => {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        checkLogin(email, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError(error));
            }
        });
    }
}

const checkLogin = (email, password, callback) => {
    if (email === 'admin@example.com' && password === 'admin') {
        return callback(null);
    } else {
        return callback(new Error('Invalid email and password'));
    }
}