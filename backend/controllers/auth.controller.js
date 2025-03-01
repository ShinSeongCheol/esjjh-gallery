const jwtService = require('../services/jwt.service');
const userService = require('../services/user.service');

const isAuthenticated = async (req, res, next) => {
    try{
        req.headers.authorization = `Bearer ${req.cookies['access_token']}`
        req.user_id = await jwtService.verifyAccessToken(req.get('authorization'));
        next();
    }catch (error) {
        if (error.name === 'JsonWebTokenError') {
            res.status(401).json(error)
        }

        if (error.name === 'TokenExpiredError') {
            res.status(419).json(error)
        }
    }
}

const getAuth = async (req, res, next) => {
    try {
        const user = await userService.getUser(req.user_id);
        res.json({
            id: user.id,
            email: user.email,
            nickname: user.nickname,
        });
    }catch (err) {
        console.error(err);
    }
}

module.exports = {
    isAuthenticated,
    getAuth,
}