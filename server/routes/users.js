const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

/**
 * Route create user
 *
 * @method POST
 * @route /api/users
 */

router.post('/', UserController.create);

module.exports = router;