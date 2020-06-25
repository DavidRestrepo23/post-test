const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

/**
 * login user
 *
 * @method POST
 * @route /api/auth
 */

router.post('/', AuthController.authenticateUser);

module.exports = router;