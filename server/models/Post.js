const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    content: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: String,
    },

    created_at: {
        type: Date,
        default: Date.now()
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

});

module.exports = mongoose.model('Post', PostSchema);