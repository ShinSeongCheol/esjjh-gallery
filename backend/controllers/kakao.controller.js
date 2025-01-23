const kakaoService = require('../services/kakao.service');

const login = (req, res, next) => {
    const kakao_oauth_authorize_url = kakaoService.getCode();
    res.setHeader('Access-Control-Allow-origin', process.env.ACCESS_CONTROL_ALLOW_ORIGIN);
    res.redirect(kakao_oauth_authorize_url);
}

const getCode = async (req, res, next) => {
    const query = req.query;
    const code = query.code;
    const token_data = await kakaoService.getToken(code);
    const data = await kakaoService.getUserInfo(token_data);
    console.log(data);
    res.redirect(process.env.FRONT_URL);
}

module.exports = {
    login,
    getCode
};