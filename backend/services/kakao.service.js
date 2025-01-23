const axios = require('axios');

const kakaoService = {};
kakaoService.getCode = function() {
    const kakao_oauth_authorize_url = process.env.KAKAO_OAUTH_AUTHORIZE_URL;
    const kakao_client_id = process.env.KAKAO_CLIENT_ID;
    const kakao_code_redirect_uri = process.env.KAKAO_CODE_REDIRECT_URI;
    const kakao_response_type = process.env.KAKAO_RESPONSE_TYPE;
    
    const url = new URL(kakao_oauth_authorize_url);
    url.searchParams.append('client_id', kakao_client_id);
    url.searchParams.append('redirect_uri', kakao_code_redirect_uri);
    url.searchParams.append('response_type', kakao_response_type);
    
    return url;    
}

kakaoService.getToken = async function(code) {
    const kakao_oauth_token_url = process.env.KAKAO_OAUTH_TOKEN_URL;
    const kakao_grant_type = process.env.KAKAO_GRANT_TYPE;
    const kakao_client_id = process.env.KAKAO_CLIENT_ID;
    // const kakao_token_redirect_uri = process.env.KAKAO_TOKEN_REDIRECT_URI;
    const kakao_token_redirect_uri = process.env.KAKAO_CODE_REDIRECT_URI;

    const token_data = await axios.post(kakao_oauth_token_url, {
        'grant_type': kakao_grant_type,
        'client_id': kakao_client_id,
        'redirect_uri': kakao_token_redirect_uri,
        'code': code,
    }, 
    {
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',}
    }).then((response) => {
        return response.data;
    }).catch((err) => {
        console.log(err);
    });

    return token_data;
}

kakaoService.getUserInfo = async function(token_data) {
    const kakao_user_info_url = process.env.KAKAO_USER_INFO_URL;

    const access_token = token_data.access_token;
    const token_type = token_data.token_type;
    const refresh_token = token_data.refresh_token;
    const expires_in = token_data.expires_in;
    const scope = token_data.scope;
    const refresh_token_expires_in = token_data.refresh_token_expires_in;

    const user_info = await axios.get(kakao_user_info_url, {
        headers: {
            'Authorization': token_type + " " + access_token,
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        }
    }).then((res) => {
        console.log(res);
        return res.data;
    })

    const user_dto = {
        id: user_info.id,
        nickname: user_info.kakao_account.profile.nickname,
        thumbnail_image_url: user_info.kakao_account.profile.thumbnail_image_url,
        profile_image_url: user_info.kakao_account.profile.profile_image_url,

        access_token,
        token_type,
        refresh_token,
        expires_in,
        scope,
        refresh_token_expires_in,
    }

    return user_dto;
}

module.exports = kakaoService