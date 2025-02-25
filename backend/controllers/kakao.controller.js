const kakaoService = require('../services/kakao.service');
const redisService = require("../services/redis.service");

const login = (req, res, next) => {
    const kakao_oauth_authorize_url = kakaoService.getKakaoOauthAuthorizeUrl();
    res.redirect(kakao_oauth_authorize_url);
}

const getCode = async (req, res, next) => {
    const query = req.query;
    const code = query.code;
    const user = await kakaoService.login(code);
    await redisService.getRedisClient(user);

    res.cookie('access_token', user.access_token);

    res.redirect(process.env.FRONT_URL);
}

module.exports = {
    login,
    getCode
};