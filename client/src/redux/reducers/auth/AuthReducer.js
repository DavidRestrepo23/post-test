const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: localStorage.getItem('token'),
    auth: null,
    message: null,
    statusMessage: null,
};

function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case "REGISTER_OK":
            return {
                ...state,
                message: action.payload.msg,
                statusMessage: true
            }
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', action.payload.user.token);
            return {
                ...state,
                user: action.payload.user,
                auth: true,
            }
        case "LOGOUT":
        case "AUTH_STATUS_ERROR":
        case "LOGIN_ERROR":
            localStorage.removeItem('token');
            return {
                ...state,
                user: false,
                auth: false,
                message: action.payload,
                statusMessage: true
            }
        case "AUTH_STATUS":
            return {
                ...state,
                auth: true,
                user: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer;