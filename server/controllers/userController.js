const User = require('../models/User');
const bcryptjs = require('bcryptjs');

/**
 * Create user.
 * Validate email
 * Hashed password
 * @param {*} req 
 * @param {*} res 
 * @return response | json
 */
exports.create = async (req, res) => {

    const { email, password } = req.body;

    try {

        //validate email user
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'This email already exists' });

        user = new User(req.body);

        //hashed password
        const salt = await bcryptjs.genSalt(5);
        user.password = await bcryptjs.hash(password, salt);

        //save user
        await user.save();

        res.json({
            msg: 'Tu cuenta ha sido creada con éxito!',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An error has ocurred' });
    }
}

/**
 * Get User Authenticated
 *
 * @param req
 * @param res
 */

exports.getUserAuthenticated = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An error has ocurred' });
    }
}
