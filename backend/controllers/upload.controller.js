const pictureService = require('../services/upload.service')

const getImages = async function (req, res, next) {
    const images = await pictureService.getImages();
    res.json(images);
};

const postImage = async function (req, res, next) {
    const fileDTO = req.file;
    const image_id = await pictureService.postImage(fileDTO);
    res.json(image_id);
};

module.exports = { getImages, postImage };
