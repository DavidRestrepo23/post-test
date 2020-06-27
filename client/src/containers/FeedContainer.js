import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPost, deletePost, currentPost } from '../redux/actions/post/actions';
import Feed from '../components/feed/Feed';

const FeedContainer = (props) => {

    useEffect(() => {
        props.getAllPost();
    }, [props.getAllPost])


    const handleClickDelete = id => {
        props.deletePost(id);
    }

    const handleCurrentPost = id => {
        props.currentPost(id);
    }

    return (
        <Feed
            posts={props.posts}
            handleClickDelete={handleClickDelete}
            handleCurrentPost={handleCurrentPost}
        />
    );
}

const mapStateToProps = state => {

    return {
        posts: state.PostReducer.posts
    }
}

const mapDispatchToProps = {
    getAllPost,
    deletePost,
    currentPost
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);