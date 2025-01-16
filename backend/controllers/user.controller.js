const express = require('express');
const router = express.Router();
const multer = require('multer');
var path = require('path');

const get = (req,res, next) => {
    res.send('images');
}

const post = (req, res, next) => {
    res.send('upload')
}

module.exports = {
    get,
    post
}