const kakaoService = require('../services/kakao.service');

const login = (req, res, next) => {
    const kakao_oauth_authorize_url = kakaoService.getKakaoOauthAuthorizeUrl();
    res.setHeader('Access-Control-Allow-origin', process.env.ACCESS_CONTROL_ALLOW_ORIGIN);
    res.redirect(kakao_oauth_authorize_url);
}

const getCode = async (req, res, next) => {
    const query = req.query;
    const code = query.code;
    const data = await kakaoService.login(code);
    res.redirect(process.env.FRONT_URL);
}

module.exports = {
    login,
    getCode
};