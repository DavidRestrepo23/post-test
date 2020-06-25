const Post = require('../models/Post');

/**
 * List post by user authenticated
 * @param {*} req 
 * @param {*} res 
 */
exports.list = async (req, res) => {

    try {

        const posts = Post.findById({ user: req.user.id }).sort({ created_at: -1 });
        res.json({ projects });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An error has ocurred' });
    }
};

/**
 * Create post
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {


    try {

        const post = new Post(req.body);
        post.user = req.user.id;

        await post.save();
        res.json({ msg: "Post Created successfully", post });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An error has ocurred' });
    }
};

/**
 * Update post by id
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.update = async (req, res) => {

    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        if (post == null) return res.status(404).json({ msg: "Post not found" });
        res.json({ message: 'Post Updated successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An error has ocurred' });
    }

};

/**
 * Delete Post by id
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.delete = async (req, res) => {

    try {
        const post = await Post.findByIdAndRemove(req.params.id);
        if (post == null) return res.status(404).json({ msg: "Post not found" });
        res.json({ message: 'Post deleted successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "An error has ocurred" });
    }
};