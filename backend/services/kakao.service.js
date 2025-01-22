
const kakaoService = {};
kakaoService.getAuthorize = function() {
    const kakao_oauth_authorize = process.env.KAKAO_OAUTH_AUTHORIZE;
    const kakao_client_id = process.env.KAKAO_CLIENT_ID;
    const kakao_redirect_uri = process.env.KAKAO_REDIRECT_URI;
    const kakao_response_type = process.env.KAKAO_RESPONSE_TYPE;

    const url = new URL(kakao_oauth_authorize);
    url.searchParams.append('client_id', kakao_client_id);
    url.searchParams.append('redirect_uri', kakao_redirect_uri);
    url.searchParams.append('response_type', kakao_response_type);

    return url;    
}

module.exports = kakaoService