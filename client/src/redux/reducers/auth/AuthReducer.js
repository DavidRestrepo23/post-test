const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: localStorage.getItem('token'),
    auth: null,
    message: null,
    statusMessage: null,
    loading: true,
};

function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case "REGISTER_OK":
            return {
                ...state,
                message: action.payload.msg,
                statusMessage: true,
                loading: false
            }
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', action.payload.user.token);
            return {
                ...state,
                user: action.payload.user,
                auth: true,
                loading: false
            }
        case "LOGOUT":
        case "AUTH_STATUS_ERROR":
        case "LOGIN_ERROR":
            localStorage.removeItem('token');
            return {
                ...state,
                user: {
                    name: null,
                    email: null,
                },
                auth: false,
                message: action.payload,
                statusMessage: false,
                loading: false
            }
        case "AUTH_STATUS":
            return {
                ...state,
                auth: true,
                user: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default AuthReducer;