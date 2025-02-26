const redis = require('redis');
const dotenv = require('dotenv');
const path = require("path");

dotenv.config({ path: path.join(__dirname, '../envs', 'redis.env') });

const getRedisClient = async () => {
    const redis_client = redis.createClient({
        url: `redis://${process.env.REDIS_USER}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`,
        legacyMode: true
    });

    redis_client.on('connect', () => {
        console.info('Redis connected!');
    });
    redis_client.on('error', (err) => {
        console.error('Redis Client Error', err);
    });

    await redis_client.connect();
    return redis_client.v4;
}

const updateRefreshToken = async (user) => {
    const redis_client = await getRedisClient();

    const {id, access_token, refresh_token} = user;
    redis_client.del(id);
    redis_client.hSet(id, 'refresh_token', refresh_token);
}

module.exports = {
    getRedisClient,
    updateRefreshToken
}