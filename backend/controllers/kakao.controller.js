const kakaoService = require('../services/kakao.service');

const login = (req, res, next) => {
    const kakao_oauth_authorize_url = kakaoService.getAuthorize();
    res.setHeader('Access-Control-Allow-origin', process.env.ACCESS_CONTROL_ALLOW_ORIGIN);
    res.send(kakao_oauth_authorize_url);
}

const auth = (req,res,next) => {
    res.send('hi');
}

module.exports = {
    login,
    auth
};