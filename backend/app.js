var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./models');
const sequelize = db.sequelize;
const cors = require('cors');

const redis = require('redis');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, 'envs', 'redis.env') });

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

redis_client.connect().then();

sequelize.sync({
  force: true
  })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

const uploadRouter = require('./routes/upload');
const kakaoRouter = require('./routes/kakao');
const userRouter = require('./routes/user')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
  credentials: true
}))

// app.use('/users', usersRouter);
app.use('/upload', uploadRouter);
app.use('/kakao', kakaoRouter);
app.use('/user', userRouter);

module.exports = app;
