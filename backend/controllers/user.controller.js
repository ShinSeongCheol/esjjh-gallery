const axios = require('axios');
require('dotenv').config()
const url = require('url');

const kakao_login = (req, res, next) => {
    const kakao_oauth_authorize = process.env.KAKAO_OAUTH_AUTHORIZE;
    const kakao_client_id = process.env.KAKAO_CLIENT_ID;
    const kakao_redirect_uri = process.env.KAKAO_REDIRECT_URI;
    const kakao_response_type = process.env.KAKAO_RESPONSE_TYPE;

    const url = new URL(kakao_oauth_authorize);
    url.searchParams.append('client_id', kakao_client_id);
    url.searchParams.append('redirect_uri', kakao_redirect_uri);
    url.searchParams.append('response_type', kakao_response_type);
    res.setHeader('Access-Control-Allow-origin', 'http://localhost:5174');
    res.setHeader('Access-Control-Allow-origin', 'http://localhost:5173');
    res.send(url);
}

const kakao_authorize_code = (req,res,next) => {
    console.log(req);
}

module.exports = {
    kakao_login,
    kakao_authorize_code
};
