const express = require("express");
const router = express.Router();
var path = require("path");

const multer = require("multer");
const upload = multer({ dest: path.join(__dirname, "../public/images") });

const { getImages, postImage } = require("../controllers/upload.controller");

router.get("/image", getImages);

router.post("/image", upload.single("image"), postImage);

module.exports = router;
