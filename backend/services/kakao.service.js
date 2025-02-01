const axios = require('axios');
const db = require('../models');
const { where } = require('sequelize');
const KakaoUser = db.KakaoUser;
const KakaoToken = db.KakaoToken;

const kakaoService = {};
kakaoService.getKakaoOauthAuthorizeUrl = function() {
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
    const kakao_token_redirect_uri = process.env.KAKAO_CODE_REDIRECT_URI;

    const kakao_token = await axios.post(kakao_oauth_token_url, {
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

    return kakao_token;
}

kakaoService.getUserInfo = async function(kakao_token) {
    const kakao_user_info_url = process.env.KAKAO_USER_INFO_URL;

    const access_token = kakao_token.access_token;
    const token_type = kakao_token.token_type;

    const user_info = await axios.get(kakao_user_info_url, {
        headers: {
            'Authorization': token_type + " " + access_token,
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        }
    }).then((res) => {
        return res.data;
    })

    return user_info;
}

kakaoService.login = async (code) => {
    const token = await kakaoService.getToken(code);
    const user_info = await kakaoService.getUserInfo(token);

    // 등록된 회원 있는지 확인
    const kakao_user = await KakaoUser.count({
        where: {
            id: user_info.id,
        }
    });

    // 회원이 없다면 생성
    if (kakao_user === 0) {
        KakaoUser.create({
            id: user_info.id,
            nickname: user_info.kakao_account.profile.nickname,
            thumbnail_image_url: user_info.kakao_account.profile.thumbnail_image_url,
            profile_image_url: user_info.kakao_account.profile.profile_image_url,
        });
    
        KakaoToken.create({
            kakao_user_id: user_info.id,
            token_type: token.token_type,
            access_token: token.access_token,
            expires_in: token.expires_in,
            refresh_token: token.refresh_token,
            refresh_token_expires_in: token.refresh_token_expires_in,
            scope: token.scope,
        });
    }
    // 회원이 있다면 업데이트
    else { 
        KakaoUser.update(
            {
                nickname: user_info.kakao_account.profile.nickname,
                thumbnail_image_url: user_info.kakao_account.profile.thumbnail_image_url,
                profile_image_url: user_info.kakao_account.profile.profile_image_url,
            },
            {
                where: {
                    id: user_info.id,
                }
            }
        )

        KakaoToken.update(
            {
                token_type: token.token_type,
                access_token: token.access_token,
                expires_in: token.expires_in,
                refresh_token: token.refresh_token,
                refresh_token_expires_in: token.refresh_token_expires_in,
                scope: token.scope,
            },
            {
                where: {
                    kakao_user_id: user_info.id,
                }
            }
        )
    }

    return user_info;
}

kakaoService.logout = async (token_data) => {
    kakao_user_logout_url = process.env.KAKAO_USER_LOGOUT_URL;
    const access_token = token_data.access_token;
    const token_type = token_data.token_type;

    const logout = await axios.post(kakao_user_logout_url, {}, {
        headers: {
            'Authorization': token_type + " " + access_token,
        }
    }).then((res) => {
        return res.data;        
    }).catch((err) => {
        console.log(err)
    });

    return logout;
}

module.exports = kakaoService