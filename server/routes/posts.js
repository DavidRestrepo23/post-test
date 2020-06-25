const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const authMiddleware = require('../middleware/auth');


/**
 * Route get all post
 *
 * @method GET
 * @route /api/posts
 */

router.get('/', authMiddleware, PostController.list);

/**
 * Route create post
 *
 * @method POST
 * @route /api/posts
 */

router.post('/', authMiddleware, PostController.create);

/**
 * Route Update post
 *
 * @method PUT
 * @route /api/posts
 */

router.put('/:id', authMiddleware, PostController.update);

/**
 * Route delete post
 *
 * @method DELETE
 * @route /api/posts
 */

router.delete('/:id', authMiddleware, PostController.delete);

module.exports = router;