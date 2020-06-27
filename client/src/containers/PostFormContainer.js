import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MainteinerFeed from '../components/feed/MainteinerFeed';
import { addPost, updatePost } from '../redux/actions/post/actions';

const PostFormContainer = (props) => {

    const [post, setPost] = useState({
        title: null,
        content: null
    });

    const [file, setFile] = useState('');

    useEffect(() => {

        if (props.currentPost) {
            setPost({
                title: props.currentPost.title,
                content: props.currentPost.content
            });
        }

    }, [props.currentPost])



    const handleChangeForm = e => {

        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeFileForm = e => {
        const file = e.target.files[0];
        setFile(file);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (props.currentPost) {
            props.updatePost(props.currentPost._id, post, file);
        } else {
            props.addPost(post, file);
            setPost({
                title: null,
                content: null
            });
        }
    }

    return (
        <MainteinerFeed
            handleChangeForm={handleChangeForm}
            handleSubmitForm={handleSubmitForm}
            handleChangeFileForm={handleChangeFileForm}
            post={post}
            message={props.message}
            statusMessage={props.statusMessage}
            action={props.currentPost ? 'Editar' : 'Crear'}
        />
    );
}

const mapStateToProps = state => {

    return {
        currentPost: state.PostReducer.currentPost,
        message: state.PostReducer.message,
        statusMessage: state.PostReducer.statusMessage
    }
}

const mapDispatchToProps = {
    addPost,
    updatePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);