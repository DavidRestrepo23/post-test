const jwt = require('jsonwebtoken');

/**
 * Middleware validate token
 * 
 * @param req
 * @param res
 * @param next
 */
module.exports = function (req, res, next) {

    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ msg: "El token ha experido, debes iniciar sesión nuevamente." });

    try {

        const tokenVerify = jwt.verify(token, process.env.SECRET_KEY);

        //add user to request
        req.user = {
            id: tokenVerify.id,
            email: tokenVerify.email
        };

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: "Security token invalid" });
    }
}