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
        res.json({ msg: 'User create successful' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An error has ocurred' });
    }
}

