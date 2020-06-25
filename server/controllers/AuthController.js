const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Login user
 * Generate token
 * @param {*} req 
 * @param {*} res 
 */
exports.authenticateUser = async (req, res) => {

    const { email, password } = req.body;

    try {

        //validate user
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'User does not exist' });

        //compared passwords
        const passwCompare = await bcryptjs.compare(password, user.password);
        if (!passwCompare) return res.status(400).json({ msg: 'Incorrect password' });

        //payload sent to jwt
        const payload = {
            id: user.id,
            email: user.email
        };

        //create jwt
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 3600 // 1 hour
        }, (error, token) => {

            if (error) throw error;

            res.json({
                response: 'User logged successful',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    token: token
                },

            });
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An error has ocurred' });
    }

};