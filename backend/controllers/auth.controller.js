const jwtService = require('../services/jwt.service');
const redisService = require('../services/redis.service');
const userService = require('../services/user.service');

const isAuthenticated = async (req, res, next) => {
    try{
        req.headers.authorization = `Bearer ${req.cookies['access_token']}`
        const verified_token = await jwtService.verifyToken(req.get('authorization'));
        req.user_id = verified_token.id;
        next();
    }catch (error) {
        if (error.name === 'JsonWebTokenError') {
            res.status(401).json(error)
        }

        if (error.name === 'TokenExpiredError') {
            res.status(419).json(error)
        }
    }
}

const refreshAuth = async (req, res, next) => {
    try {
        req.headers.authorization = `Bearer ${req.cookies['access_token']}`

        //refresh_token 인증
        const decoded_token = await jwtService.decodeToken(req.get('authorization'));
        const refresh_token = await redisService.getRefreshToken(decoded_token.id);
        const verified_token = await jwtService.verifyToken(`Bearer ${refresh_token}`);

        // access, refresh token 재생성
        const generated_access_token = jwtService.generateAccessToken(verified_token.id);
        const generated_refresh_token = jwtService.generateRefreshToken(verified_token.id);

        // redis refresh token 재설정
        await redisService.updateRefreshToken({id:verified_token.id, refresh_token:generated_refresh_token});
        
        // access_token 재설정
        res.cookie('access_token', generated_access_token, {httpOnly: true});

        const user = await userService.getUser(verified_token.id);
        res.status(200).json(user);
    } catch (err) {
        // refresh token 만료되거나 토큰 형태가 이상하면 refresh 토큰 및 access 토큰 삭제
        let authorization = `Bearer ${req.cookies['access_token']}`
        const decoded_token = await jwtService.decodeToken(authorization);
        await redisService.removeRefreshToken(decoded_token.id);

        res.clearCookie('access_token');
        res.status(401).json(err);
    }
}

const getAuth = async (req, res, next) => {
    try {
        const user = await userService.getUser(req.user_id);
        res.json({
            id: user.id,
            email: user.email,
            nickname: user.nickname,
        });
    }catch (err) {
        console.error(err);
    }
}

module.exports = {
    isAuthenticated,
    refreshAuth,
    getAuth,
}