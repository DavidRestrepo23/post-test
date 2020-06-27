const initialState = {
    posts: [],
    message: null,
    statusMessage: null,
    currentPost: null
};

function PostReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_POST":
            return {
                ...state,
                posts: action.payload.posts
            }
        case "ADD_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload.post],
                message: action.payload.msg,
                statusMessage: true
            }
        case "EDIT_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload.post],
                message: action.payload.msg,
                statusMessage: true
            }
        case "CURRENT_POST":
            return {
                ...state,
                currentPost: state.posts.find(
                    post => post._id === action.payload
                )
            }
        case "DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(
                    post => post._id !== action.payload
                )
            }
        default:
            return state
    }
}

export default PostReducer;