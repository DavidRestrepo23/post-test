const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middleware/auth');

/**
 * Route create user
 *
 * @method POST
 * @route /api/users
 */

router.post('/', UserController.create);

/**
 * Route get user
 *
 * @method GET
 * @route /api/users
 */
router.get('/', authMiddleware, UserController.getUserAuthenticated)

module.exports = router;