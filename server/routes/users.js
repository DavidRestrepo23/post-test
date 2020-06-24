const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * Route create user
 *
 * @method POST
 * @route /api/users
 */

router.post('/', userController.create);

module.exports = router;