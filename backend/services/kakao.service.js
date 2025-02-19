const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname,'../envs', 'kakao.env')});

const jwtService = require('./jwt.service');
const redisService = require('./redis.service');
const db = require('../models');
const bcrypt = require("bcrypt");
const User = db.User;
const UserType = db.UserType;

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

    const kakao_access_token = token.access_token;
    const id = user_info.id;
    const nickname = user_info.kakao_account.profile.nickname;
    const profil_image_url = user_info.kakao_account.profile.profile_image_url;
    const email = user_info.kakao_account.email;

    console.log(profil_image_url);

    //jwt access token, refresh toekn 생성
    const access_token = jwtService.generateAccessToken(id);
    const refresh_token = jwtService.generateRefreshToken(id);

    // redis 에 refresh token 저장
    const redis_client = await redisService.getRedisClient();

    // 기존 값 삭제 후 추가
    await redis_client.del(email);
    await redis_client.hSet(email, 'refresh_token', refresh_token);

    // 등록된 회원 있는지 확인
    const user_cnt = await User.count({
        where: {
            email: email,
        }
    }).catch((err) => {
        console.error(err)
    });

    // 비밀번호 생성
    const salt = bcrypt.genSaltSync(10);
    const hashed_password = bcrypt.hashSync(access_token, salt);

    // 등록되지 않았다면 회원 생성
    if (user_cnt === 0) {
        const user_type = await UserType.findOrCreate({
            where: {
                type: "KAKAO"
            }
        }).then((res) => {
            return res[0];
        });

        User.create({
            email: email,
            nickname: nickname,
            password: hashed_password,
            user_type_id: user_type.id,
        });
    // 등록 되었다면 회원 수정
    }else {
        User.update(
            {
                nickname: nickname,
                password: hashed_password,
            },
            {
                where: {
                    email: email,
                }
            }
        );
    }

    return kakao_access_token;
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