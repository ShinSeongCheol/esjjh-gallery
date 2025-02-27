const jwtService = require('../services/jwt.service');
const userService = require('../services/user.service');

const isAuthenticated = async (req, res, next) => {
    try{
        req.headers.authorization = `Bearer ${req.cookies['access_token']}`
        req.user_id = await jwtService.verifyAccessToken(req.get('authorization'));
        next();
    }catch (err) {
        console.error(err);
    }
}

const getAuth = async (req, res, next) => {
    const user = await userService.getUser(req.user_id);
    res.json({
       id: user.id,
       email: user.email,
       nickname: user.nickname,
    });
}

module.exports = {
    isAuthenticated,
    getAuth,
}