const path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, '../envs', 'jwt.env')});

const generateAccessToken = (id) => {
    const access_token = jwt.sign({id: id}, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: process.env.JWT_ACCESS_EXPIRES,
    });

    return access_token;
}

const generateRefreshToken = (id) => {
    const refresh_token = jwt.sign({id: id}, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: process.env.JWT_REFRESH_EXPIRES,
    });

    return refresh_token;
}

const verifyAccessToken = (authorization) => {
    if (!!authorization) {
        const access_token = authorization.split(' ')[1];
        const result = jwt.verify(access_token, process.env.JWT_SECRET, {});
        return result.id;
    }
    return null;
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken
}