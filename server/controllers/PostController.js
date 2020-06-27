const Post = require('../models/Post');
const fileUpload = require('express-fileupload');

/**
 * List post by user authenticated
 * @param {*} req 
 * @param {*} res 
 */
exports.list = async (req, res) => {

    try {
        const posts = await Post.find({ user: req.user.id }).sort({ created_at: -1 });
        res.json({ posts });

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

        let image = req.files.file;
        image.name = Math.random(1, 1000000) + '_' + image.name;

        await image.mv(`./src/images/${image.name}`, err => {
            if (err) return res.status(500).send({ message: err });
        });

        const post = new Post(req.body);
        post.user = req.user.id;
        post.image = image.name;
        await post.save();
        res.json({ msg: "Post creado correctamente", post });

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

        if (req.files) {
            image = req.files.file;
            image.name = Math.random(1, 1000000) + '_' + image.name;

            await image.mv(`./src/images/${image.name}`, err => {
                if (err) return res.status(500).send({ message: err });
            });

            req.body.image = image.name;
        }

        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        if (post == null) return res.status(404).json({ msg: "Post not found" });
        res.json({ msg: 'Post editado correctamente' });

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