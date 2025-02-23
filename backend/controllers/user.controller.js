const userService = require('../services/user.service');
const jwtService = require('../services/jwt.service');
const redisService = require('../services/redis.service');

const userController = {};

userController.login = async (req, res, next) => {
    console.log(req);
    res.send('hi');
}

userController.signup = async (req, res, next) => {
    try{
        user = {
            nickname: req.body.nickname,
            password: req.body.password,
            email: req.body.email,
            profile_image: req.file
        }

        const user_id = await userService.signup(user);

        const access_token = jwtService.generateAccessToken(user_id);
        const refresh_token = jwtService.generateRefreshToken(user_id);

        user.access_token = access_token;
        user.refresh_token = refresh_token;

        await redisService.updateRefreshToken(user);

        res.cookie({"access_token":access_token}, {sameSite: 'strict', cors: true});
        res.status(200).json(user_id);
    }catch(err) {
        console.log(err);

        res.status(400).json(err);
    }
}

module.exports = userController;
