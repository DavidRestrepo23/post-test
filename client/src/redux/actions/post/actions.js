import { ADD_POST, GET_ALL_POST, DELETE_POST, CURRENT_POST, EDIT_POST } from './actionType';
import clientAxios from '../../../config/axios';

/**
 * Save Post
 * @param {*} post 
 */
export function addPost(post, file) {

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('file', file);

    return async (dispatch) => {
        await clientAxios.post('/api/posts', formData).then(response => {
            dispatch({
                type: ADD_POST,
                payload: {
                    msg: response.data.msg,
                    post: response.data.post
                }
            });
        }).catch(error => {
            console.log(error)
        });
    }
}

/**
 * Update Post
 * @param {*} post 
 */
export function updatePost(_id, post, file) {

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('file', file);

    return async (dispatch) => {
        await clientAxios.put(`/api/posts/${_id}`, formData).then(response => {
            dispatch({
                type: EDIT_POST,
                payload: {
                    msg: response.data.msg,
                    post: response.data.post
                }
            });
        }).catch(error => {
            console.log(error)
        });
    }
}


/**
 * Get All Post by user
 */
export function getAllPost() {
    return async (dispatch) => {
        await clientAxios.get('/api/posts').then(response => {
            dispatch({
                type: GET_ALL_POST,
                payload: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }
}

/**
 * Current post
 * 
 * @param {*} post_id 
 */
export function currentPost(post_id) {
    return {
        type: CURRENT_POST,
        payload: post_id
    }
}

/**
 * Delete post
 */
export function deletePost(post_id) {
    return async (dispatch) => {
        await clientAxios.delete(`api/posts/${post_id}`).then(response => {
            dispatch({
                type: DELETE_POST,
                payload: post_id
            });
        }).catch(error => {
            console.log(error);
        });
    }
}
