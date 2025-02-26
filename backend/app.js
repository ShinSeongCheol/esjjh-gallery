var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./models');
const sequelize = db.sequelize;
const cors = require('cors');

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
const authRouter = require('./routes/auth')

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
app.use('/auth', authRouter)

module.exports = app;
