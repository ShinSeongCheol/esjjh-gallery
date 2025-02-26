const kakaoService = require('../services/kakao.service');
const redisService = require("../services/redis.service");
const jwtService = require("../services/jwt.service");

const login = (req, res, next) => {
    const kakao_oauth_authorize_url = kakaoService.getKakaoOauthAuthorizeUrl();
    res.redirect(kakao_oauth_authorize_url);
}

const getCode = async (req, res, next) => {
    const query = req.query;
    const code = query.code;

    const user_id = await kakaoService.login(code);
    const access_token = jwtService.generateAccessToken(user_id);
    const refresh_token = jwtService.generateRefreshToken(user_id);

    const user = {
        id: user_id,
        access_token: access_token,
        refresh_token: refresh_token,
    }

    await redisService.updateRefreshToken(user);

    res.cookie('access_token', user.access_token);

    res.redirect(process.env.FRONT_URL);
}

module.exports = {
    login,
    getCode
};