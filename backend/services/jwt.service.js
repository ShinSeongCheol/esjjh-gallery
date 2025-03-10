const path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const {JsonWebTokenError} = require("jsonwebtoken");
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

const decodeToken = (authorization) => {
    const token = authorization.split(' ')[1];
    return jwt.decode(token, process.env.JWT_SECRET);
}

const verifyToken = (authorization) => {
    const token = authorization.split(' ')[1];
    return jwt.verify(token, process.env.JWT_SECRET, {});
}


module.exports = {
    generateAccessToken,
    generateRefreshToken,
    decodeToken,
    verifyToken
}