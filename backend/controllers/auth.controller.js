const jwtService = require('../services/jwt.service');
const userService = require('../services/user.service');

const isAuthenticated = async (req, res, next) => {
    try{
        req.user_id = await jwtService.verifyAccessToken(req.get('authorization'));
        next();
    }catch (err) {
        console.error(err);
    }
}

const getAuth = async (req, res, next) => {
    const user = await userService.getUser(req.user_id);
    console.log(user);
}

module.exports = {
    isAuthenticated,
    getAuth,
}